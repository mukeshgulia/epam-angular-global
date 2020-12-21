import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/services/auth/model/user';
import * as userActions from '../actions/auth.actions';

export interface State {
  isAuthenticated: boolean;
  token: string | null;
  userinfo: User | null;
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  token: null,
  userinfo: new User(0, '', {first: '', last: ''}, '', '' ),
  errorMessage: null
};

const loginReducer = createReducer(
  initialState,
  on(userActions.login, (state) => ({...state})),
  on(userActions.loginSuccess, (state, result) => ({...state, isAuthenticated: true, token: result.token})),
  on(userActions.loginFailure, (state, result) => ({...state, isAuthenticated: false, token: null, errorMessage: result.message})),
  on(userActions.logout, (state) => ({...state, token: null})),
  on(userActions.getUserInfo, (state) => ({...state})),
  on(userActions.userInfoSuccess, (state, result) => ({...state, userinfo: result.user})),
  on(userActions.userInfoFailure, (state, result) => ({...state, userinfo: null, errorMessage: result.message})),
);

export function reducer(state: State | undefined, action: Action): any {
  return loginReducer(state, action);
}
