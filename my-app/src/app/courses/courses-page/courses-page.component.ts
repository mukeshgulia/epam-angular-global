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
import { getCourses } from 'src/app/core/store/courses/actions/course.actions';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  private courseCount: number = 3;

  public breadcrumbs: Breadcrumb[] = [];

  public coursesView: Course[] = [];

  public courses$: Observable<Course[]>;
  constructor(
    private courseService: CourseService,
    private breadCrumbService: BreadCrumbsService,
    private store: Store<AppState>
  ) {
    console.log('Called constructor!');
  }

  public ngOnInit(): void {
    this.breadcrumbs = this.breadCrumbService.getCoursePageCrumbs();
    // this.getCourses();
    console.log('dispatching getCourses');
    this.store.dispatch(getCourses());
    this.courses$ = this.store.select(allCourses).pipe(tap(console.log));
  }

  public onDeleteCourse(id: number): void {
    if (confirm(`Are you sure to delete course with id: ${id}`)) {
      this.courseService.deleteCourse(id).subscribe({
        next: (data) => {
          console.log(data);
          this.getCourses();
        },
        error: (error) => {
          console.error('There was an error while deleting course!', error);
        },
      });
    }
  }

  public search(text: string): void {
    this.courseService
      .search(text)
      .pipe(map((courses) => courses.slice(0, this.courseCount)))
      .subscribe((courses) => {
        this.coursesView = courses;
      });
  }

  public load(): void {
    this.courseCount += 3;
    this.store.dispatch(getCourses());
    }

  private getCourses(): void {
    this.courseService.getCourses(this.courseCount).subscribe((courses) => {
      this.coursesView = courses;
    });
  }
}
