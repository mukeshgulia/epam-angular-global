import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;

  @Output() deleteCourse = new EventEmitter<number>();

  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

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
