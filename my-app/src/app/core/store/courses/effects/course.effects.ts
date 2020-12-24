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
  private courseId: number;

  public searchCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActions.searchCourse),
      withLatestFrom(this.store.select(courseCount)),
      exhaustMap(([action, count]) =>
        this.courseService.search(action.text).pipe(
          map((response) =>
            courseActions.searchCourseSuccess({
              courses: response.slice(0, count),
            })
          ),
          catchError((error) => of(courseActions.editCourseFailure(error)))
        )
      )
    )
  );

  public getCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActions.getCourses),
      withLatestFrom(this.store.select(courseCount)),
      exhaustMap(([action, count]) =>
        this.courseService.getCourses(action.loadMore ? count * 2 : count).pipe(
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
            courseActions.editCourseSuccess({ course: response })
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
            courseActions.addCourseSuccess({ course: response })
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

  public deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActions.deleteCourse),
      tap((action) => (this.courseId = action.id)),
      exhaustMap((action) =>
        this.courseService.deleteCourse(action.id).pipe(
          map(() => courseActions.getCourses({loadMore: false})),
          catchError((error) => of(courseActions.deleteCourseFailure(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private store: Store<CourseState>,
    private router: Router
  ) {}
}
