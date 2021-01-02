import { Action, createReducer, on } from '@ngrx/store';
import { dummyUser } from 'src/app/core/constants';
import { User } from 'src/app/core/services/auth/model/user';
import * as userActions from '../actions/auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  userinfo: User | null;
  errorMessage: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  userinfo: undefined,
  errorMessage: null
};

const loginReducer = createReducer(
  initialState,
  on(userActions.loginSuccess, (state, result) => ({
    ...state,
    isAuthenticated: true,
    token: result.token,
    errorMessage: null
  })),
  on(userActions.loginFailure, (state, result) => ({
    ...state,
    isAuthenticated: false,
    token: null,
    errorMessage: result.message
  })),
  on(userActions.logout, (state) => ({...state,
    isAuthenticated: false,
    token: null,
    userinfo: undefined,
    errorMessage: null
  })),
  on(userActions.userInfoSuccess, (state, result) => ({
    ...state,
    userinfo: result.user,
    errorMessage: null
  })),
  on(userActions.userInfoFailure, (state, result) => ({
    ...state,
    userinfo: null,
    errorMessage: result.message
  })),
);

export function reducer(state: AuthState | undefined, action: Action): any {
  return loginReducer(state, action);
}
