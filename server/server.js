const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2/promise");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors({ origin: "http://localhost:4200" }));
app.use(bodyParser.json());

// Connessione MySQL
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "", // metti la tua password XAMPP
  database: "skinhd"
};

// Email configuration (use your email service)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: 'spartan155official@gmail.com', // replace with your email
    pass: 'gjnu okwe cgph ihgn' // replace with your app password
  }
});

// Temporary storage for OTPs (in production, use Redis or database)
const otpStorage = new Map();

// Generate OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP via email
async function sendOTPEmail(email, otp) {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your OTP Code - SkinHD',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">Welcome to SkinHD!</h2>
        <p>Your verification code is:</p>
        <div style="background-color: #f3f4f6; padding: 20px; text-align: center; margin: 20px 0;">
          <h1 style="color: #1f2937; font-size: 32px; margin: 0;">${otp}</h1>
        </div>
        <p>This code will expire in 10 minutes.</p>
        <p>If you didn't request this code, please ignore this email.</p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
}

// Register - Send OTP
app.post("/api/register", async (req, res) => {
  const { nickname, email, password } = req.body;
  const connection = await mysql.createConnection(dbConfig);

  try {
    // Check if email already exists
    const [rows] = await connection.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length > 0) {
      await connection.end();
      return res.status(400).json({ message: "Email già registrata" });
    }

    // Generate and store OTP
    const otp = generateOTP();
    otpStorage.set(email, {
      otp: otp,
      userData: { nickname, email, password },
      timestamp: Date.now()
    });

    // Send OTP via email
    await sendOTPEmail(email, otp);

    await connection.end();
    res.status(200).json({ 
      message: "OTP inviato via email", 
      requireOTP: true 
    });

  } catch (error) {
    await connection.end();
    console.error('Registration error:', error);
    res.status(500).json({ message: "Errore durante la registrazione" });
  }
});

// Verify OTP and complete registration
app.post("/api/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  const connection = await mysql.createConnection(dbConfig);

  try {
    // Check if OTP exists and is valid
    const storedData = otpStorage.get(email);
    if (!storedData) {
      await connection.end();
      return res.status(400).json({ message: "OTP non trovato o scaduto" });
    }

    // Check if OTP is expired (10 minutes)
    if (Date.now() - storedData.timestamp > 10 * 60 * 1000) {
      otpStorage.delete(email);
      await connection.end();
      return res.status(400).json({ message: "OTP scaduto" });
    }

    // Verify OTP
    if (storedData.otp !== otp) {
      await connection.end();
      return res.status(400).json({ message: "OTP non valido" });
    }

    // Complete registration
    const { nickname, password } = storedData.userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await connection.execute(
      "INSERT INTO users (nickname, email, password) VALUES (?, ?, ?)",
      [nickname, email, hashedPassword]
    );

    // Clean up OTP
    otpStorage.delete(email);

    await connection.end();
    res.status(201).json({ message: "Utente registrato con successo" });

  } catch (error) {
    await connection.end();
    console.error('OTP verification error:', error);
    res.status(500).json({ message: "Errore durante la verifica OTP" });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const connection = await mysql.createConnection(dbConfig);

  try {
    const [rows] = await connection.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) {
      await connection.end();
      return res.status(400).json({ message: "Email non trovata" });
    }

    const user = rows[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      await connection.end();
      return res.status(401).json({ message: "Password errata" });
    }

    const token = jwt.sign(
      { 
        id: user.id,
        email: user.email, 
        nickname: user.nickname 
      }, 
      "secretKey", 
      { expiresIn: "24h" }
    );
    
    await connection.end();
    res.json({ 
      token,
      user: {
        id: user.id,
        email: user.email,
        nickname: user.nickname
      }
    });

  } catch (error) {
    await connection.end();
    console.error('Login error:', error);
    res.status(500).json({ message: "Errore durante il login" });
  }
});

// Verify token endpoint
app.get("/api/verify-token", async (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: "Token non fornito" });
  }

  try {
    const decoded = jwt.verify(token, "secretKey");
    const connection = await mysql.createConnection(dbConfig);
    
    const [rows] = await connection.execute("SELECT * FROM users WHERE id = ?", [decoded.id]);
    await connection.end();
    
    if (rows.length === 0) {
      return res.status(401).json({ message: "Utente non trovato" });
    }

    const user = rows[0];
    res.json({ 
      user: {
        id: user.id,
        email: user.email,
        nickname: user.nickname
      }
    });

  } catch (error) {
    res.status(401).json({ message: "Token non valido" });
  }
});

app.listen(3000, () => console.log("Server avviato su http://localhost:3000"));