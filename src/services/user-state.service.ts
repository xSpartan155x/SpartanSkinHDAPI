import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

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

  constructor(private router: Router, private authService: AuthService) {
    this.initializeFromStorage();
  }

  private initializeFromStorage() {
    const token = localStorage.getItem('token');
    if (token) {
      this.tokenSubject.next(token);

      // Verifica token col server e recupera dati utente
      this.authService.verifyToken().subscribe({
        next: (user: User) => {
          this.userSubject.next(user);
        },
        error: () => {
          this.logout(); // Token non valido
        }
      });
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