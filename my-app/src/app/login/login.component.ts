import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogIn } from '../core/store/auth/actions/auth.actions';
import { AuthState, selectAuthState } from '../core/store/auth/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private getAuthState: Observable<any>;
  public email: string;
  public password: string;
  public errorMessage: string | null;
  constructor(private store: Store<AuthState>) {
    this.getAuthState = this.store.select(selectAuthState);
  }

  public ngOnInit(): void {
    this.getAuthState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  public authenticate(): void {
    const payload = {
      email: this.email,
      password: this.password
    };
    this.store.dispatch(new LogIn(payload));
  }

}
