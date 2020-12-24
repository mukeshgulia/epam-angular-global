// Task 2: Learn ngOnChanges and other interface call orders

import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course/course.service';

import { Course } from 'src/app/core/services/course/model/course';
import { BreadCrumbsService } from 'src/app/core/services/bread-crumb/bread-crumb.service';
import { Breadcrumb } from 'src/app/core/services/bread-crumb/model/bread-crumb';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppState, allCourses } from 'src/app/core/store/app.state';
import { Store } from '@ngrx/store';
import { deleteCourse, getCourses, searchCourse } from 'src/app/core/store/courses/actions/course.actions';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {

  public breadcrumbs: Breadcrumb[] = [];

  public coursesView: Course[] = [];

  public courses$: Observable<Course[]>;
  constructor(
    private breadCrumbService: BreadCrumbsService,
    private store: Store<AppState>
  ) {
    console.log('Called constructor!');
  }

  public ngOnInit(): void {
    this.breadcrumbs = this.breadCrumbService.getCoursePageCrumbs();
    this.store.dispatch(getCourses({loadMore: false}));
    this.courses$ = this.store.select(allCourses);
  }

  public onDeleteCourse(id: number): void {
    if (confirm(`Are you sure to delete course with id: ${id}`)) {
      this.store.dispatch(deleteCourse({id}));
    }
  }

  public search(text: string): void {
    this.store.dispatch(searchCourse({text}));
  }

  public loadMore(): void {
    this.store.dispatch(getCourses({loadMore: false}));
    this.courses$ = this.store.select(allCourses);
    }
}
