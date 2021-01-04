import { createAction, props } from '@ngrx/store';
import { Author } from 'src/app/core/services/course/model/author';

export const GET_AUTHORS = '[Authors] Get Authors';
export const GET_AUTHORS_SUCCESS = '[Authors] Get Authors Success';
export const GET_AUTHORS_FAILURE = '[Authors] Get Authors Failure';

export const getAuthors = createAction(GET_AUTHORS);
export const getAuthorsSuccess = createAction(
  GET_AUTHORS_SUCCESS,
  props<{ authors: Author[] }>()
);
export const getAuthorsFailure = createAction(
  GET_AUTHORS_FAILURE,
  props<{ message: string }>()
);
