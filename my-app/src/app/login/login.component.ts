import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/auth/auth.service';
import { LogIn } from '../core/store/auth/actions/auth.actions';
import { AuthState, selectAuthState } from '../core/store/auth/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  private getAuthState: Observable<any>;
  public errorMessage: string | null;
  constructor(private store: Store<AuthState>, private authService: AuthService, private router: Router) {
    this.getAuthState = this.store.select(selectAuthState);
  }

  public ngOnInit(): void {
    this.getAuthState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  };

  public authenticate(): void {
    const payload = {
      email: this.email,
      password: this.password
    };
    this.store.dispatch(new LogIn(payload));
  }

}
