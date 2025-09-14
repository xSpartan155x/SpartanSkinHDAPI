import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserStateService } from '../../services/user-state.service';
import { Router } from '@angular/router';
@Component({
  selector: 'lib-dashboard',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(
    private router: Router,
    public userStateService: UserStateService
  ) {}

  public logout() {
    this.userStateService.logout()
    this.router.navigate(['/'])
  }
}
