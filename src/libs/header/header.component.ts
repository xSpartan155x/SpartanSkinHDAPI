import { DropdownComponent } from "../dropdown/dropdown.component";
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'lib-header',
  imports: [DropdownComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public dropdownOptions:any = {
    label: 'Services',
    path: 'services/',
    sections: [
      { 
        title : 'HD Services', 
        options: [
            {title: 'HD Skin', path: 'services/HD-Skin'},
            {title: 'HD Capes', path: 'services/HD-Capes'},
            {title: 'HD Elytra', path: 'services/HD-Elytras'},
        ]
      },
      { 
        title : 'Base Services', 
        options: [
            {title: 'Base Skin', path: 'services/Base-Skin'},
        ]
      }
    ]
  }
  headerLinkText = 'Login';
  headerLinkRoute = '/login';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Ogni volta che cambia la route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const childRoute = this.getChildRoute(this.route);
        const type = childRoute.snapshot.data['type'];

        if (type === 'login') {
          this.headerLinkText = 'Register';
          this.headerLinkRoute = '/register';
        } else if (type === 'register') {
          this.headerLinkText = 'Login';
          this.headerLinkRoute = '/login';
        } else {
          this.headerLinkText = 'Login';
          this.headerLinkRoute = '/login';
        }
      });
  }

  // Funzione ricorsiva per ottenere la route più profonda
  private getChildRoute(route: ActivatedRoute): ActivatedRoute {
    if (route.firstChild) {
      return this.getChildRoute(route.firstChild);
    }
    return route;
  }
  
}
