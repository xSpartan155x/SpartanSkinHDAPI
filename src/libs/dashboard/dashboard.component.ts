import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from "../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
