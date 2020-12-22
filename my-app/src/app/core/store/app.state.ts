import { createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth/auth.state';
import * as auth from './auth/reducers/auth.reducers';
import * as course from './courses/reducers/course.reducers';

export interface AppState {
  authState: auth.State;
  courseState: course.State;
}

export const reducers = {
  auth: auth.reducer,
  course: course.reducer
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');
