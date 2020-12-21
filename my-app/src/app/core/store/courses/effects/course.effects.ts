import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CourseService } from '../../../services/course/course.service';
import * as courseActions from '../actions/course.actions';

@Injectable()
export class CoursesEffects {

  public getCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActions.getCourses),
      exhaustMap(action =>
        this.courseService.getCourses(action.count).pipe(
          map(response => courseActions.getCoursesSuccess(response)),
          catchError((error) => of(courseActions.getCoursesFailure(error))))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}

}
