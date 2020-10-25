// Task 2: Learn ngOnChanges and other interface call orders

import {
  Component,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { DateHelper } from 'src/app/core/utils/date-helper';

import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements
OnInit,
OnChanges,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  public courses: Course[] = [];

  constructor(private dateHelper: DateHelper) {
    console.log('Called constructor!');
   }

  public onDeleteCourse(id: number): void {
      this.courses.splice(id, 1);
  }

  public ngOnChanges(): void {
    console.log('Called ngOnChanges!');
  }

  public ngOnInit(): void {

    const today: Date = new Date();
    this.addCourse(today, false);
    this.addCourse(this.dateHelper.subtractDays(today, 1), true);
    this.addCourse(this.dateHelper.addDays(today, 1), false);
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

  private addCourse(date: Date, topRated: boolean): void {
    const desc: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus quam neque, sit amet tempus ipsum tempor nec. Maecenas tincidunt, lectus non faucibus dapibus, metus velit ultricies ipsum, eget tincidunt est massa vitae diam. Aliquam pellentesque neque ipsum, vitae dignissim sem lobortis non.';
    const course: Course = new Course(1, 'Course Name', date, 120, desc);
    course.topRated = topRated;
    this.courses.push(course);
  }
}
