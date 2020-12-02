import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public email: string;
  public password: string;
  constructor(private authService: AuthService, private router: Router) { }

  public authenticate(): void {
    this.authService.login(this.email, this.password)
    .subscribe((res: {token: string}) => {
      console.log(`token: ${res.token}`);
      this.authService.token  = res.token;
      this.router.navigateByUrl('/courses');
    });
;
  }

}
