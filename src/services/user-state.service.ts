import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
  id: number;
  email: string;
  nickname: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private userSubject = new BehaviorSubject<User | null>(null);
  private tokenSubject = new BehaviorSubject<string | null>(null);

  public user$ = this.userSubject.asObservable();
  public token$ = this.tokenSubject.asObservable();

  constructor(private router: Router) {
    // Check for existing token on service initialization
    this.initializeFromStorage();
  }

  private initializeFromStorage() {
    const token = localStorage.getItem('token');
    if (token) {
      this.tokenSubject.next(token);
      // Optionally verify token with server here
    }
  }

  setUser(user: User, token: string) {
    localStorage.setItem('token', token);
    this.userSubject.next(user);
    this.tokenSubject.next(token);
  }

  getUser(): User | null {
    return this.userSubject.value;
  }

  getToken(): string | null {
    return this.tokenSubject.value || localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken() && !!this.getUser();
  }

  logout() {
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }

  redirectToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}