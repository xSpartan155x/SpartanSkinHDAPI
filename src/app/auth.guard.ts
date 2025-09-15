import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserStateService } from '../services/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userStateService: UserStateService, private router: Router) {}

  canActivate(): boolean {
    if (this.userStateService.isLoggedIn()) {
      return true; // Utente loggato → può accedere
    } else {
      this.router.navigate(['/login']); // Non loggato → redirect al login
      return false;
    }
  }
}
