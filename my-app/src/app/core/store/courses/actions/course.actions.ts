import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/core/services/course/model/course';

export const SEARCH_COURSES = '[Courses] Search Courses';
export const SEARCH_COURSES_SUCCESS = '[Courses] Search Courses Success';
export const SEARCH_COURSES_FAILURE = '[Courses] Search Courses Failure';

export const GET_COURSES = '[Courses] Get Courses';
export const GET_COURSES_SUCCESS = '[Courses] Get Courses Success';
export const GET_COURSES_FAILURE = '[Courses] Get Courses Failure';

export const EDIT_COURSE = '[Courses] Edit Course';
export const EDIT_COURSE_SUCCESS = '[Courses] Edit Course Success';
export const EDIT_COURSE_FAILURE = '[Courses] Edit Course Failure';

export const ADD_COURSE = '[Courses] Add Course';
export const ADD_COURSE_SUCCESS = '[Courses] Add Course Success';
export const ADD_COURSE_FAILURE = '[Courses] Add Course Failure';

export const DELETE_COURSE = '[Courses] Delete Course';
export const DELETE_COURSE_SUCCESS = '[Courses] Delete Course Success';
export const DELETE_COURSE_FAILURE = '[Courses] Delete Course Failure';

export const searchCourse = createAction(
  SEARCH_COURSES,
  props<{ text: string }>()
  );
export const searchCourseSuccess = createAction(
  SEARCH_COURSES_SUCCESS,
  props<{ courses: Course[] }>()
);
export const searchCourseFailure = createAction(
  SEARCH_COURSES_FAILURE,
  props<{ message: string }>()
);

export const getCourses = createAction(GET_COURSES,
  props<{ loadMore: boolean }>()
);
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
  props<{ course: Course }>()
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
  props<{ course: Course }>()
);
export const addCourseFailure = createAction(
  ADD_COURSE_FAILURE,
  props<{ message: string }>()
);

export const deleteCourse = createAction(
  DELETE_COURSE,
  props<{ id: number }>()
  );
export const deleteCourseFailure = createAction(
  DELETE_COURSE_FAILURE,
  props<{ message: string }>()
);
