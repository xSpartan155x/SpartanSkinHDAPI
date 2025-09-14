import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserStateService } from '../../services/user-state.service';
import { ModalService } from '../../services/modal.service';
import { InputComponent } from '../../libs/input/input.component';
import { ModalComponent } from "../../libs/modal/modal.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, InputComponent, FormsModule, ModalComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = { nickname: '', email: '', password: '' };
  type: 'login' | 'register' = 'login';
  showMinecraftNickname = false;
  formButtonText = 'Login';
  toggleText = 'Register';
  isSubmitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userStateService: UserStateService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.type = data['type'];
      this.showMinecraftNickname = this.type === 'register';
      this.formButtonText = this.type === 'register' ? 'Register' : 'Login';
      this.toggleText = this.type === 'register' ? 'Login' : 'Register';
    });

    // Check if user is already logged in
    if (this.userStateService.isLoggedIn()) {
      this.userStateService.redirectToDashboard();
    }
  }

  onSubmit() {
    if (this.isSubmitting) return;

    if (this.type === 'login') {
      this.onLogin();
    } else {
      this.onRegister();
    }
  }

  onLogin() {
    this.isSubmitting = true;

    this.authService.login({
      email: this.user.email,
      password: this.user.password
    }).subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        
        // Set user state
        this.userStateService.setUser(response.user, response.token);
        
        // Show success message
        this.modalService.openSuccessModal(
          'Welcome Back!',
          `Hello ${response.user.nickname}! You have successfully logged in.`
        );

        // Redirect to dashboard after a short delay
        setTimeout(() => {
          this.modalService.closeModal();
          this.userStateService.redirectToDashboard();
        }, 2000);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.modalService.openErrorModal(
          'Login Failed',
          error.error?.message || 'Invalid email or password. Please try again.'
        );
      }
    });
  }

  onRegister() {
    this.isSubmitting = true;

    this.authService.register(this.user).subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        
        if (response.requireOTP) {
          // Open OTP verification modal
          console.log(response.requireOTP);
          this.modalService.openOTPModal(this.user.email);
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        this.modalService.openErrorModal(
          'Registration Failed',
          error.error?.message || 'An error occurred during registration. Please try again.'
        );
      }
    });
  }
}