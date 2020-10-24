import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  // Task 2
  @Output() public deleteCourse = new EventEmitter<number>();

  // Task 2
  @Input() public course: Course;


  constructor(public datepipe: DatePipe) { }

  public getDate(date: Date): string {
    return this.datepipe.transform(date, 'dd MMM, yyyy');
  }

  public edit(): void {
    console.log('pending implementation');
  }

  public delete(): void {
    console.log('Deleting course');
    this.deleteCourse.emit(this.course.id);
  }

}
