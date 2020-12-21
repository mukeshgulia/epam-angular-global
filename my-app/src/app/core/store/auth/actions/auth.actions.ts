import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/services/auth/model/user';

export const USER_LOGIN = '[Auth] Login';
export const USER_LOGOUT = '[Auth] Logout';
export const USER_LOGIN_SUCCESS = '[Auth] Login Success';
export const USER_LOGIN_FAILURE = '[Auth] Login Failure';

export const USER_INFO = '[User] User Info';
export const USER_INFO_SUCCESS = '[User] User Info Success';
export const USER_INFO_FAILURE = '[User] User Info Failure';

export const login = createAction(
  USER_LOGIN,
  props<{login: string, password: string}>()
);

export const loginSuccess = createAction(
  USER_LOGIN_SUCCESS,
  props<{token: string}>()
);

export const loginFailure = createAction(
  USER_LOGIN_FAILURE,
  props<{message: string}>()
);

export const logout = createAction(
  USER_LOGOUT
);

export const getUserInfo = createAction(
  USER_INFO
);

export const userInfoSuccess = createAction(
  USER_LOGIN_SUCCESS,
  props<{user: User}>()
);

export const userInfoFailure = createAction(
  USER_LOGIN_FAILURE,
  props<{message: string}>()
);


// import { Action, createAction, props } from '@ngrx/store';

// export enum AuthActionTypes {
//   LOGIN = '[Auth] Login',
//   LOGIN_SUCCESS = '[Auth] Login Success',
//   LOGIN_FAILURE = '[Auth] Login Failure',
//   LOGOUT = '[Auth] Logout',
// }



// export class LogIn implements Action {
//   public readonly type = AuthActionTypes.LOGIN;
//   constructor(public payload: any) {}
// }

// export class LogInSuccess implements Action {
//   public readonly type = AuthActionTypes.LOGIN_SUCCESS;
//   constructor(public payload: any) {}
// }

// export class LogInFailure implements Action {
//   public readonly type = AuthActionTypes.LOGIN_FAILURE;
//   constructor(public error: any) {}
// }

// export class LogOut implements Action {
//   public readonly type = AuthActionTypes.LOGOUT;
// }

// export type All =
//   | LogIn
//   | LogInSuccess
//   | LogInFailure
//   | LogOut;
