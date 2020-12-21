import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from '../actions/auth.actions';

export interface State {
  // isAuthenticated: boolean;
  token: string | null;
  errorMessage: string | null;
}

export const initialState: State = {
  // isAuthenticated: false,
  token: null,
  errorMessage: null
};

const loginReducer = createReducer(
  initialState,
  on(userActions.login, (state) => ({...state})),
  on(userActions.loginSuccess, (state, result) => ({...state, token: result.token})),
  on(userActions.logout, (state) => ({...state, token: null}))
);

export function reducer(state: State | undefined, action: Action): any {
  return loginReducer(state, action);
}


// export function reducer(state = initialState, action: All): State {
//   switch (action.type) {
//     case AuthActionTypes.LOGIN_SUCCESS: {
//       return {
//         ...state,
//         // isAuthenticated: true,
//         token: action.payload.token,
//         errorMessage: null
//       };
//     }
//     case AuthActionTypes.LOGIN_FAILURE: {
//       return {
//         ...state,
//         errorMessage: 'Incorrect id and/or password.'
//       };
//     }
//     default: {
//       return state;
//     }
//     case AuthActionTypes.LOGOUT: {
//       return initialState;
//     }
//   }
// }
