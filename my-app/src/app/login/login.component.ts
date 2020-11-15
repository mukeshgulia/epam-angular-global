import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public email: string;
  public token: string;
  constructor(private authService: AuthService) { }

  public authenticate(): void {
    this.authService.login(this.email, this.token);
  }

}
