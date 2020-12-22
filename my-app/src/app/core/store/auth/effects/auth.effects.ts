import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';
import * as userActions from '../actions/auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  public userLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.login),
      exhaustMap(action =>
        this.authService.login(action.login, action.password).pipe(
          // map(response => response.token),
          switchMap(token => [
            userActions.loginSuccess(token),
            userActions.getUserInfo(token)
          ]),
          catchError((error) => of(userActions.loginFailure(error))))
      )
    )
  );

  public userLoginSuccess = createEffect(
    () => this.actions$.pipe(
      ofType(userActions.loginSuccess),
      tap(action => {
        localStorage.setItem('token', action.token);
        console.log(`loginsuccess token: ${action.token}`);
        this.router.navigateByUrl('/courses');
      })),
      { dispatch: false }
    );

  public userLogOut = createEffect(
    () => this.actions$.pipe(
      ofType(userActions.logout),
      tap(() => {
        localStorage.removeItem('token');
        this.authService.logout();
        this.router.navigateByUrl('/login');
      })),
      { dispatch: false }
    );

    public userInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getUserInfo),
      exhaustMap((action) =>
        this.authService.getUserInfo(action.token).pipe(
          tap(response => console.log(`userinfo response: ${response}`)),
          map(response => userActions.userInfoSuccess({user: response})),
          catchError((error) => of(userActions.userInfoFailure(error))))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

}
