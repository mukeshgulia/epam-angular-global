import { Action, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/core/services/course/model/course';
import * as coursesActions from '../actions/course.actions';
import { CourseState } from '../courses.state';

export interface State {
  courses: Course[];
  count: number;
  errorMessage: string | null;
}

export const initialState: State = {
  courses: null,
  count: 3,
  errorMessage: null
};

const loginReducer = createReducer(
  initialState,
  on(coursesActions.getCourses, (state) => ({...state})),
  on(coursesActions.getCoursesSuccess, (state, result) => ({...state, courses: result.courses})),
  on(coursesActions.getCoursesFailure, (state, result) => ({...state, errorMessage: result.message}))
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
