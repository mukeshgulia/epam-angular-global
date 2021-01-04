import { Action, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/core/services/course/model/course';
import * as coursesActions from '../actions/course.actions';

export interface CourseState {
  courses: Course[];
  count: number;
  errorMessage: string | null;
}

export const initialState: CourseState = {
  courses: null,
  count: 3,
  errorMessage: null,
};

const courseReducer = createReducer(
  initialState,
  on(coursesActions.getCourses, (state, result) => ({
    ...state,
    count: result.loadMore ? state.count * 2 : state.count,
  })),
  on(coursesActions.getCoursesSuccess, (state, result) => ({
    ...state,
    courses: result.courses,
  })),
  on(coursesActions.editCourseSuccess, (state, result) => ({
    ...state,
    courses: state.courses.map((currentCourse) =>
      currentCourse.id === result.course.id ? result.course : currentCourse
    ),
  })),
  on(coursesActions.searchCourseSuccess, (state, result) => ({
    ...state,
    courses: result.courses,
  })),
  on(coursesActions.getCoursesFailure, (state, result) => ({
    ...state,
    errorMessage: result.message,
  })),
  on(coursesActions.editCourseFailure, (state, result) => ({
    ...state,
    errorMessage: result.message,
  })),
  on(coursesActions.addCourseFailure, (state, result) => ({
    ...state,
    errorMessage: result.message,
  })),
  on(coursesActions.searchCourseFailure, (state, result) => ({
    ...state,
    errorMessage: result.message,
  }))
);

export function reducer(state: CourseState | undefined, action: Action): any {
  return courseReducer(state, action);
}
