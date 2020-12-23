import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/core/services/course/model/course';

export const GET_COURSES = '[Courses] Get Courses';
export const GET_COURSES_SUCCESS = '[Courses] Get Courses Success';
export const GET_COURSES_FAILURE = '[Courses] Get Courses Failure';

export const EDIT_COURSE = '[Courses] Edit Course';
export const EDIT_COURSE_SUCCESS = '[Courses] Edit Course Success';
export const EDIT_COURSE_FAILURE = '[Courses] Edit Course Failure';

export const ADD_COURSE = '[Courses] Add Course';
export const ADD_COURSE_SUCCESS = '[Courses] Add Course Success';
export const ADD_COURSE_FAILURE = '[Courses] Add Course Failure';

export const getCourses = createAction(GET_COURSES);
export const getCoursesSuccess = createAction(
  GET_COURSES_SUCCESS,
  props<{ courses: Course[] }>()
);
export const getCoursesFailure = createAction(
  GET_COURSES_FAILURE,
  props<{ message: string }>()
);

export const editCourse = createAction(
  EDIT_COURSE,
  props<{ course: Course }>()
  );
export const editCourseSuccess = createAction(
  EDIT_COURSE_SUCCESS,
  props<{ courses: Course[] }>()
);
export const editCourseFailure = createAction(
  EDIT_COURSE_FAILURE,
  props<{ message: string }>()
);

export const addCourse = createAction(
  ADD_COURSE,
  props<{ course: Course }>()
  );
export const addCourseSuccess = createAction(
  ADD_COURSE_SUCCESS,
  props<{ courses: Course[] }>()
);
export const addCourseFailure = createAction(
  ADD_COURSE_FAILURE,
  props<{ message: string }>()
);
