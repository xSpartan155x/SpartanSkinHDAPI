import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { ModalService, ModalConfig } from '../../services/modal.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'lib-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  modalConfig: ModalConfig = {
    title: '',
    content: '',
    type: 'info',
    showModal: false,
    otpValue: '',
    email: ''
  };

  otpInput = '';
  errorMessage = '';
  isVerifying = false;
  resendCooldown = 0;

  private subscription!: Subscription;
  private resendTimer?: Subscription;

  constructor(
    private modalService: ModalService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.modalService.modal$.subscribe(config => {
      this.modalConfig = config;
      if (config.showModal && config.type === 'otp') {
        this.otpInput = '';
        this.errorMessage = '';
        this.isVerifying = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.resendTimer) {
      this.resendTimer.unsubscribe();
    }
  }

  onOTPInput(event: any) {
    // Only allow numbers
    const value = event.target.value.replace(/\D/g, '');
    this.otpInput = value;
    this.errorMessage = '';
    
    if (value.length === 6) {
      // Auto-verify when 6 digits are entered
      setTimeout(() => this.verifyOTP(), 500);
    }
  }

  verifyOTP() {
    if (this.otpInput.length !== 6 || this.isVerifying) {
      return;
    }

    this.isVerifying = true;
    this.errorMessage = '';

    this.authService.verifyOTP(this.modalConfig.email!, this.otpInput).subscribe({
      next: (response) => {
        this.isVerifying = false;
        this.modalService.openSuccessModal(
          'Registration Successful!', 
          'Your account has been created successfully. You can now log in with your credentials.'
        );
        
        // Close success modal after 3 seconds and redirect to login
        setTimeout(() => {
          this.modalService.closeModal();
          this.router.navigate(['/login']);
        }, 3000);
      },
      error: (error) => {
        this.isVerifying = false;
        this.errorMessage = error.error?.message || 'Invalid or expired OTP. Please try again.';
      }
    });
  }

  resendOTP() {
    if (this.resendCooldown > 0) {
      return;
    }

    // Start cooldown timer
    this.resendCooldown = 60;
    this.resendTimer = interval(1000).subscribe(() => {
      this.resendCooldown--;
      if (this.resendCooldown <= 0) {
        this.resendTimer?.unsubscribe();
      }
    });

    // Here you could call a resend OTP API endpoint
    console.log('Resending OTP to:', this.modalConfig.email);
  }

  closeModal() {
    this.modalService.closeModal();
  }

  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}