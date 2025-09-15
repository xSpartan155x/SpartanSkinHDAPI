import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from '../../services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts: Toast[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.subscription = this.toastService.toasts$.subscribe(
      toasts => this.toasts = toasts
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClose(toastId: string) {
    this.toastService.remove(toastId);
  }

  trackByToastId(index: number, toast: Toast): string {
    return toast.id;
  }

  getToastClasses(type: string): string {
    const baseClasses = 'flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-lg dark:text-gray-400 dark:bg-gray-800 transform transition-all duration-300 ease-in-out animate-slide-in';
    
    switch (type) {
      case 'success':
        return `${baseClasses} border-l-4 border-green-500`;
      case 'error':
        return `${baseClasses} border-l-4 border-red-500`;
      case 'warning':
        return `${baseClasses} border-l-4 border-orange-500`;
      case 'info':
        return `${baseClasses} border-l-4 border-blue-500`;
      default:
        return baseClasses;
    }
  }

  getIconClasses(type: string): string {
    switch (type) {
      case 'success':
        return 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200';
      case 'error':
        return 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200';
      case 'warning':
        return 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200';
      case 'info':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-700 dark:text-blue-200';
      default:
        return 'text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200';
    }
  }
}