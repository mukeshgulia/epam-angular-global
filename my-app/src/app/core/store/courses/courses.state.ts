import { Action } from '@ngrx/store';
import { Course } from '../../services/course/model/course';

export enum CoursesActionTypes {
  COURSES_GET = '[Courses] GET'
}

export class CoursesGet implements Action {
  public readonly type = CoursesActionTypes.COURSES_GET;
  constructor(public payload: Course[]) {}
}

