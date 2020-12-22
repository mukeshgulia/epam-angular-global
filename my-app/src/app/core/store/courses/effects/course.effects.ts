import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, withLatestFrom, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CourseService } from '../../../services/course/course.service';
import * as courseActions from '../actions/course.actions';
import { Store } from '@ngrx/store';
import { CourseState } from '../courses.state';

@Injectable()
export class CoursesEffects {

  public getCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActions.getCourses),
      withLatestFrom(this.store.select(state => state.courseState.count)),
      exhaustMap(([action, count]) =>
        this.courseService.getCourses(count).pipe(
          map(response => courseActions.getCoursesSuccess({courses: response})),
          catchError((error) => of(courseActions.getCoursesFailure(error))))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private store: Store<CourseState>
  ) {}

}
