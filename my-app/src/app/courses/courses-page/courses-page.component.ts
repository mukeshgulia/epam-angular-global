// Task 2: Learn ngOnChanges and other interface call orders

import {
  Component,
  OnChanges,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { CourseService } from 'src/app/core/services/course/course.service';

import { Course } from 'src/app/core/services/course/model/course';
import { BreadCrumbsService } from 'src/app/core/services/bread-crumb/bread-crumb.service';
import { Breadcrumb } from 'src/app/core/services/bread-crumb/model/bread-crumb';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent  implements
OnChanges,
OnInit,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  private courseCount: number = 3;

  public breadcrumbs: Breadcrumb[] =  [];

  public coursesView: Course[] = [];

  constructor(
    private courseService: CourseService,
    private breadCrumbService: BreadCrumbsService) {
    console.log('Called constructor!');
   }

  public ngOnInit(): void {
    this.breadcrumbs = this.breadCrumbService.getCoursePageCrumbs();
    this.getCourses();
  }

  public onDeleteCourse(id: number): void {
    if (confirm(`Are you sure to delete course with id: ${id}` )) {
      this.courseService.deleteCourse(id)
      .subscribe({
        next: data => {
            console.log(data);
            this.getCourses();
        },
        error: error => {
            console.error('There was an error while deleting course!', error);
        }
    });
    }
  }

  public search(text: string): void{
    this.courseService.search(text)
    .pipe( map((courses) => courses.slice(0, this.courseCount)) )
    .subscribe(courses => {
        this.coursesView = courses;
    });
  }

  public load(): void {
    this.courseCount += 3;
    this.getCourses();
  }

  public ngOnChanges(): void {
    // console.log('Called ngOnChanges!');
  }

  public ngAfterContentInit(): void {
   // console.log('Called ngAfterContentInit!');
  }

  public ngAfterContentChecked(): void {
   // console.log('Called ngAfterContentChecked!');
  }

  public ngAfterViewInit(): void {
   // console.log('Called ngAfterViewInit!');
  }

  public ngAfterViewChecked(): void {
   // console.log('Called ngAfterViewChecked!');
  }

  public ngOnDestroy(): void {
  //  console.log('Called ngOnDestroy!');
  }


  private getCourses(): void {
    this.courseService.getCourses(this.courseCount)
    .subscribe(courses => {
      this.coursesView = courses;
    });
  }
}
