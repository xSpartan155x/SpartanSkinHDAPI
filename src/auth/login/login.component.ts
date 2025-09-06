import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../libs/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true, // necessario se usi `imports` qui
  imports: [CommonModule, RouterLink, InputComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type: 'login' | 'register' = 'login';
  showMinecraftNickname = false;
  formButtonText = 'Login';
  toggleText = 'Register';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.type = data['type'];
      this.showMinecraftNickname = this.type === 'register';
      this.formButtonText = this.type === 'register' ? 'Register' : 'Login';
      this.toggleText = this.type === 'register' ? 'Login' : 'Register';
    });
  }
}
