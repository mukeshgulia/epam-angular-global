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

  courses: Course[] = [];

  constructor() {
    console.log('Called constructor!');
   }

  public onDeleteCourse(id: number): void {
      this.courses.splice(id, 1);
  }

  public ngOnChanges(): void {
    console.log('Called ngOnChanges!');
  }

  public ngOnInit(): void {
    const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus quam neque, sit amet tempus ipsum tempor nec. Maecenas tincidunt, lectus non faucibus dapibus, metus velit ultricies ipsum, eget tincidunt est massa vitae diam. Aliquam pellentesque neque ipsum, vitae dignissim sem lobortis non.';

    for (let i = 0 ; i < 3; i++) {
      const course = new Course(i, 'Course Name', new Date(), 120, desc);
      this.courses.push(course);
    }

    console.log('Called noOnInit!');
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
}
