import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
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
          map(response => userActions.loginSuccess(response)),
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
      ofType(userActions.loginSuccess),
      tap(() => {
        localStorage.removeItem('token');
        this.authService.logout();
        this.router.navigateByUrl('/login');
      })),
      { dispatch: false }
    );

//   map((action: LogInSuccess) => action.payload),
//   tap((response) => {
//     localStorage.setItem('token', response.token);
//     console.log(`loginsuccess token: ${response.token}`);
//     this.router.navigateByUrl('/courses');
//   }));


//   @Effect({ dispatch: false })
//   public LogInSuccess: Observable<any> = this.actions.pipe(
//   ofType(AuthActionTypes.LOGIN_SUCCESS),
//   map((action: LogInSuccess) => action.payload),
//   tap((response) => {
//     localStorage.setItem('token', response.token);
//     console.log(`loginsuccess token: ${response.token}`);
//     this.router.navigateByUrl('/courses');
//   }));


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

}

// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { catchError, map, switchMap, tap } from 'rxjs/operators';

// import { AuthService } from '../../../services/auth/auth.service';
// import { Observable, of } from 'rxjs';
// import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure } from '../actions/auth.actions';


// @Injectable()
// export class AuthEffects {

//   @Effect()
//   public Login: Observable<any> = this.actions.pipe(
//     ofType(AuthActionTypes.LOGIN),
//     map((action: LogIn) => action.payload),
//     switchMap(payload => {
//       return this.authService.login(payload.email, payload.password)
//       .pipe(
//         map((response) => {
//           console.log(response);
//           return new LogInSuccess({token: response.token});
//         }),
//         catchError((error) => {
//           return of(new LogInFailure({ error }));
//         })
//       );
//     })
//   );

//   @Effect({ dispatch: false })
//   public LogInSuccess: Observable<any> = this.actions.pipe(
//   ofType(AuthActionTypes.LOGIN_SUCCESS),
//   map((action: LogInSuccess) => action.payload),
//   tap((response) => {
//     localStorage.setItem('token', response.token);
//     console.log(`loginsuccess token: ${response.token}`);
//     this.router.navigateByUrl('/courses');
//   }));

//   @Effect({ dispatch: false })
//   public LogInFailure: Observable<any> = this.actions.pipe(
//   ofType(AuthActionTypes.LOGIN_FAILURE)
//   );

//   @Effect({ dispatch: false })
//   public LogOut: Observable<any> = this.actions.pipe(
//   ofType(AuthActionTypes.LOGOUT),
//   tap((response) => {
//     localStorage.removeItem('token');
//   }));

//   constructor(
//     private actions: Actions,
//     private authService: AuthService,
//     private router: Router,
//   ) {}

// }
