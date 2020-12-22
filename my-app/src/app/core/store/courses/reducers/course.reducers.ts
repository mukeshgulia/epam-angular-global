import { Action, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/core/services/course/model/course';
import * as coursesActions from '../actions/course.actions';

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

const courseReducer = createReducer(
  initialState,
  on(coursesActions.getCourses, (state) => ({...state})),
  on(coursesActions.getCoursesSuccess, (state, result) => ({...state, courses: result.courses})),
  on(coursesActions.getCoursesFailure, (state, result) => ({...state, errorMessage: result.message}))
);

export function reducer(state: State | undefined, action: Action): any {
  return courseReducer(state, action);
}
