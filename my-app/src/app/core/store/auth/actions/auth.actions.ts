import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/services/auth/model/user';

export const USER_LOGIN = '[Auth] Login';
export const USER_LOGOUT = '[Auth] Logout';
export const USER_LOGIN_SUCCESS = '[Auth] Login Success';
export const USER_LOGIN_FAILURE = '[Auth] Login Failure';

export const USER_INFO = '[Auth] User Info';
export const USER_INFO_SUCCESS = '[Auth] User Info Success';
export const USER_INFO_FAILURE = '[Auth] User Info Failure';

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
  USER_INFO,
  props<{token: string}>()
);

export const userInfoSuccess = createAction(
  USER_LOGIN_SUCCESS,
  props<{user: User}>()
);

export const userInfoFailure = createAction(
  USER_LOGIN_FAILURE,
  props<{message: string}>()
);
