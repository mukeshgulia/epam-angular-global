import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map,
  exhaustMap,
  catchError,
  withLatestFrom,
  tap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { CourseService } from '../../../services/course/course.service';
import * as courseActions from '../actions/course.actions';
import { Store } from '@ngrx/store';
import { courseCount } from '../../app.state';
import { CourseState } from '../reducers/course.reducers';
import { Router } from '@angular/router';

@Injectable()
export class CoursesEffects {
  public getCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActions.getCourses),
      withLatestFrom(this.store.select(courseCount)),
      exhaustMap(([action, count]) =>
        this.courseService.getCourses(count).pipe(
          map((response) =>
            courseActions.getCoursesSuccess({ courses: response })
          ),
          catchError((error) => of(courseActions.getCoursesFailure(error)))
        )
      )
    )
  );

  public editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActions.editCourse),
      exhaustMap((action) =>
        this.courseService.updateCourse(action.course).pipe(
          map((response) =>
            courseActions.editCourseSuccess({ courses: response })
          ),
          catchError((error) => of(courseActions.editCourseFailure(error)))
        )
      )
    )
  );

  public editCourseSuccess = createEffect(
    () =>
      this.actions$.pipe(
        ofType(courseActions.editCourseSuccess),
        tap(() => {
          this.router.navigateByUrl('/courses');
        })
      ),
    { dispatch: false }
  );


  public addCourse$ = createEffect(() =>
  this.actions$.pipe(
    ofType(courseActions.addCourse),
    exhaustMap((action) =>
      this.courseService.createCourse(action.course).pipe(
        map((response) =>
          courseActions.addCourseSuccess({ courses: response })
        ),
        catchError((error) => of(courseActions.editCourseFailure(error)))
      )
    )
  )
);

public addCourseSuccess = createEffect(
  () =>
    this.actions$.pipe(
      ofType(courseActions.addCourseSuccess),
      tap(() => {
        this.router.navigateByUrl('/courses');
      })
    ),
  { dispatch: false }
);

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private store: Store<CourseState>,
    private router: Router
  ) {}
}
