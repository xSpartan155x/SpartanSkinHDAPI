import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { InputComponent } from '../../libs/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, InputComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = { nickname: '', email: '', password: '' };
  type: 'login' | 'register' = 'login';
  showMinecraftNickname = false;
  formButtonText = 'Login';
  toggleText = 'Register';

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.type = data['type'];
      this.showMinecraftNickname = this.type === 'register';
      this.formButtonText = this.type === 'register' ? 'Register' : 'Login';
      this.toggleText = this.type === 'register' ? 'Login' : 'Register';
    });
  }

  onSubmit() {
    if (this.type === 'login') {
      this.onLogin();
    } else {
      this.onRegister();
    }
  }

  onLogin() {
    this.authService.login(this.user).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        console.log("Login successful");
      },
      error: err => console.error('Login error:', err)
    });
  }

  onRegister() {
    this.authService.register(this.user).subscribe({
      next: res => {
        console.log('Registration successful:', res);
      },
      error: err => console.error('Registration error:', err)
    });
  }
}