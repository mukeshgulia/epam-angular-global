import { Action } from '@ngrx/store';

export enum CoursesActionTypes {
  GET_ALL = '[Courses] Get all courses',
  GET_BY_ID = '[Courses] Get course by id',
}

export class GetCourses implements Action {
  public readonly type = CoursesActionTypes.GET_ALL;
  constructor(public payload: any) {}
}

export class GetCourseById implements Action {
  public readonly type = CoursesActionTypes.GET_BY_ID;
  constructor(public payload: any) {}
}

export type All =
  | GetCourses
  | GetCourseById;
