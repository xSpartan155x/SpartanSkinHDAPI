import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$ = this.toastsSubject.asObservable();

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  show(type: Toast['type'], title: string, message: string, duration: number = 5000) {
    const toast: Toast = {
      id: this.generateId(),
      type,
      title,
      message,
      duration
    };

    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, toast]);

    // Auto-remove toast after duration
    if (duration > 0) {
      setTimeout(() => {
        this.remove(toast.id);
      }, duration);
    }
  }

  showSuccess(title: string, message: string, duration?: number) {
    this.show('success', title, message, duration);
  }

  showError(title: string, message: string, duration?: number) {
    this.show('error', title, message, duration);
  }

  showWarning(title: string, message: string, duration?: number) {
    this.show('warning', title, message, duration);
  }

  showInfo(title: string, message: string, duration?: number) {
    this.show('info', title, message, duration);
  }

  remove(id: string) {
    const currentToasts = this.toastsSubject.value;
    const updatedToasts = currentToasts.filter(toast => toast.id !== id);
    this.toastsSubject.next(updatedToasts);
  }

  clear() {
    this.toastsSubject.next([]);
  }
}