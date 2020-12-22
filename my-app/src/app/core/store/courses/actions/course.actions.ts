import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/core/services/course/model/course';

export const GET_COURSES = '[Courses] Get Courses';
export const GET_COURSES_SUCCESS = '[Courses] Get Courses Success';
export const GET_COURSES_FAILURE = '[Courses] Get Courses Failure';

export const getCourses = createAction(
  GET_COURSES
);

export const getCoursesSuccess = createAction(
  GET_COURSES_SUCCESS,
  props<{courses: Course[]}>()
);

export const getCoursesFailure = createAction(
  GET_COURSES_FAILURE,
  props<{message: string}>()
);
