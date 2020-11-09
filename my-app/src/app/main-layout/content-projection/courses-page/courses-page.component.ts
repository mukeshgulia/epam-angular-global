// Task 2: Learn ngOnChanges and other interface call orders

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
import { FilterPipe } from 'src/app/core/pipes/filter.pipe';
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
  public coursesView: Course[] = [];

  constructor(private dateHelper: DateHelper, private filterPipe: FilterPipe) {
    console.log('Called constructor!');
   }

  public onDeleteCourse(id: number): void {
      this.courses.splice(id, 1);
      this.coursesView = this.courses;
  }

  public ngOnChanges(): void {
    console.log('Called ngOnChanges!');
  }

  public ngOnInit(): void {

    const today: Date = new Date();
    this.addCourse('course-by-mukesh', today, false);
    this.addCourse('course-by-mentor', this.dateHelper.subtractDays(today, 1), true);
    this.addCourse('course-for-everyone', this.dateHelper.addDays(today, 1), false);
    this.coursesView = this.courses;
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
    this.coursesView = this.filterPipe.transform(this.courses, text);
    console.log(this.coursesView);
  }

  private addCourse(name: string, date: Date, topRated: boolean): void {
    const desc: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus quam neque, sit amet tempus ipsum tempor nec. Maecenas tincidunt, lectus non faucibus dapibus, metus velit ultricies ipsum, eget tincidunt est massa vitae diam. Aliquam pellentesque neque ipsum, vitae dignissim sem lobortis non.';
    const course: Course = new Course(1, name, date, 122, desc);
    course.topRated = topRated;
    this.courses.push(course);
  }

}
