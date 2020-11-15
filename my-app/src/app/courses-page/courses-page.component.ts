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
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { CourseService } from 'src/app/core/services/course/course.service';

import { Course } from 'src/app/core/services/course/model/course';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements
OnChanges,
OnInit,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  public coursesView: Course[] = [];

  constructor(private courseService: CourseService, private filterPipe: FilterPipe) {
    console.log('Called constructor!');
   }

  public ngOnInit(): void {
    this.coursesView = this.courseService.getList();
  }

  public onDeleteCourse(id: number): void {
    if (confirm(`Are you sure to delete course with id: ${id}` )) {
      this.courseService.removeItem(id);
      this.coursesView = this.courseService.getList();
      }
  }

  public ngOnChanges(): void {
    console.log('Called ngOnChanges!');
  }

  public ngAfterContentInit(): void {
    console.log('Called ngAfterContentInit!');
  }

  public ngAfterContentChecked(): void {
    console.log('Called ngAfterContentChecked!');
  }

  public ngAfterViewInit(): void {
    console.log('Called ngAfterViewInit!');
  }

  public ngAfterViewChecked(): void {
    console.log('Called ngAfterViewChecked!');
  }

  public ngOnDestroy(): void {
    console.log('Called ngOnDestroy!');
  }

  public filter(text: string): void{
    console.log('filtering...');
    this.coursesView = this.filterPipe.transform(this.courseService.getList(), text);
    console.log(this.coursesView);
  }

}
