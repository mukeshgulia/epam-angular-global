import { Action, createReducer, on } from '@ngrx/store';
import { Author } from 'src/app/core/services/course/model/author';
import * as authorActions from '../actions/author.actions';

export interface AuthorState {
  authors: Author[];
  errorMessage: string | null;
}

export const initialState: AuthorState = {
  authors: null,
  errorMessage: null,
};

const authorReducer = createReducer(
  initialState,
  on(authorActions.getAuthorsSuccess, (state, result) => ({
    ...state,
    authors: result.authors,
  }))
);

export function reducer(state: AuthorState | undefined, action: Action): any {
  return authorReducer(state, action);
}
