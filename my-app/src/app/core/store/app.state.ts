import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Course } from '../services/course/model/course';
import * as auth from './auth/reducers/auth.reducers';
import * as course from './courses/reducers/course.reducers';

export interface AppState {
  authState: auth.AuthState;
  courseState: course.CourseState;
}

export const reducers = {
  auth: auth.reducer,
  course: course.reducer,
};

export const authFeatureSelector = createFeatureSelector<auth.AuthState>(
  'auth'
);
export const authToken = createSelector(
  authFeatureSelector,
  (state) => state.token
);
export const userInfo = createSelector(
  authFeatureSelector,
  (state) => state.userinfo
);

export const courseFeatureSelector = createFeatureSelector<course.CourseState>(
  'course'
);
export const courseCount = createSelector(
  courseFeatureSelector,
  (state) => state.count
);
export const allCourses = createSelector(
  courseFeatureSelector,
  (state) => state.courses
);

export const courseById = createSelector(
  allCourses,
  (courses: Course[], { id }) => courses.filter(c => c.id === id)
);
