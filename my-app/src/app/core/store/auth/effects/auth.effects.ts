import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AuthService } from '../../../services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure } from '../actions/auth.actions';


@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  @Effect()
  Login: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: LogIn) => action.payload),
    switchMap(payload => {
      return this.authService.login(payload.email, payload.password)
      .pipe(
        map((response) => {
          console.log(response);
          return new LogInSuccess({token: response.token});
        }),
        catchError((error) => {
          return of(new LogInFailure({ error: error }));
        })
      );
    })
  );

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.LOGIN_SUCCESS),
  map((action: LogInSuccess) => action.payload),
  tap((response) => {
    // localStorage.setItem('token', user.payload.token);
    console.log(`token here: ${response.token}`)
    this.router.navigateByUrl('/courses');
  }));

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.LOGIN_FAILURE)
  );

}
