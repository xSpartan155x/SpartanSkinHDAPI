import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserStateService } from '../services/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private groupHierarchy = ['user', 'artist', 'admin']; // ordine gerarchico

  constructor(private userState: UserStateService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.userState.getUser();
    if (!user) {
      this.router.navigate(['/login']);
      return false;
    }

    // recuperiamo il gruppo richiesto dalla route (puoi aggiungerlo nel data)
    const requiredGroup: 'admin' | 'artist' | 'user' | undefined = route.data['group'];

    if (!requiredGroup) return true; // se non c'è gruppo richiesto, la rotta è aperta

    const userRank = this.groupHierarchy.indexOf(user.group);
    const requiredRank = this.groupHierarchy.indexOf(requiredGroup);

    if (userRank >= requiredRank) {
      return true; // accesso consentito
    } else {
      this.router.navigate(['/dashboard']); // o una pagina "Access Denied"
      return false;
    }
  }
}
