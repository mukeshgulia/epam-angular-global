import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map,
  exhaustMap,
  catchError
} from 'rxjs/operators';
import { of } from 'rxjs';
import { CourseService } from '../../../services/course/course.service';
import * as authorActions from '../actions/author.actions';

@Injectable()
export class AuthorEffects {

  public getAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authorActions.getAuthors),
      exhaustMap((action) =>
        this.courseService.getAllAuthors().pipe(
          map((response) =>
          authorActions.getAuthorsSuccess({ authors: response })
          ),
          catchError((error) => of(authorActions.getAuthorsFailure(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
  ) {}
}
