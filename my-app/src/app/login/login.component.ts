import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../core/store/auth/actions/auth.actions';
import { loginError } from '../core/store/app.state';
import { AppState } from '../core/store//app.state';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public errorMessage: Observable<string>;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  public ngOnInit(): void {
  }

  public authenticate(): void {

    const payload = {
      login: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    this.store.dispatch(login(payload));

    this.errorMessage = this.store.select(loginError);
  }

}
