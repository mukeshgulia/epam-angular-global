import { All, AuthActionTypes } from '../actions/auth.actions';

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

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        // isAuthenticated: true,
        token: action.payload.token,
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect id and/or password.'
      };
    }
    default: {
      return state;
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
  }
}
