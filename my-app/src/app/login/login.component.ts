import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from '../core/store/auth/actions/auth.actions';
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
      login: this.password,
      password: this.password
    };
    this.store.dispatch(login(payload));
  }

}
