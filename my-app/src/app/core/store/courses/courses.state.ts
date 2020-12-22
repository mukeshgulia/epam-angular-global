import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as course from './reducers/course.reducers';

export interface CourseState {
  courseState: course.State;
}

export const reducers = {
  course: course.reducer
};
