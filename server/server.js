const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2/promise");

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

// Register
app.post("/api/register", async (req, res) => {
  const { nickname, email, password } = req.body;
  const connection = await mysql.createConnection(dbConfig);

  const [rows] = await connection.execute("SELECT * FROM users WHERE email = ?", [email]);
  if (rows.length > 0) {
    await connection.end();
    return res.status(400).json({ message: "Email già registrata" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await connection.execute(
    "INSERT INTO users (nickname, email, password) VALUES (?, ?, ?)",
    [nickname, email, hashedPassword]
  );

  await connection.end();
  res.status(201).json({ message: "Utente registrato con successo" });
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const connection = await mysql.createConnection(dbConfig);

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

  const token = jwt.sign({ email: user.email, nickname: user.nickname }, "secretKey", { expiresIn: "1h" });
  await connection.end();
  res.json({ token });
});

app.listen(3000, () => console.log("Server avviato su http://localhost:3000"));
