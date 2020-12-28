import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../core/store/auth/actions/auth.actions';
import { AppState } from '../core/store//app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public errorMessage: string | null;
  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
  }

  public authenticate(): void {
    const payload = {
      login: this.password,
      password: this.password
    };
    this.store.dispatch(login(payload));
  }

}
