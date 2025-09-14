import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ModalConfig {
  title: string;
  content: string;
  type: 'otp' | 'info' | 'error' | 'success';
  showModal: boolean;
  otpValue?: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalSubject = new BehaviorSubject<ModalConfig>({
    title: '',
    content: '',
    type: 'info',
    showModal: false,
    otpValue: '',
    email: ''
  });

  public modal$ = this.modalSubject.asObservable();

  openOTPModal(email: string) {
    this.modalSubject.next({
      title: 'Verify Your Email',
      content: `We sent a 6-digit verification code to ${email}. Please enter it below to complete your registration.`,
      type: 'otp',
      showModal: true,
      otpValue: '',
      email: email
    });
  }

  openInfoModal(title: string, content: string) {
    this.modalSubject.next({
      title,
      content,
      type: 'info',
      showModal: true
    });
  }

  openErrorModal(title: string, content: string) {
    this.modalSubject.next({
      title,
      content,
      type: 'error',
      showModal: true
    });
  }

  openSuccessModal(title: string, content: string) {
    this.modalSubject.next({
      title,
      content,
      type: 'success',
      showModal: true
    });
  }

  closeModal() {
    this.modalSubject.next({
      ...this.modalSubject.value,
      showModal: false
    });
  }

  updateOTPValue(value: string) {
    this.modalSubject.next({
      ...this.modalSubject.value,
      otpValue: value
    });
  }
}