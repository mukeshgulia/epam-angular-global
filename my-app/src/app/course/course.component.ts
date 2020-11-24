import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/core/services/course/model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CourseComponent {

  // Task 2
  @Output() public courseId = new EventEmitter<number>();

  // Task 2
  @Input() public course: Course;


  constructor() { }

  public edit(): void {
    console.log('pending implementation');
  }

  public delete(): void {
    console.log('Deleting course');
    this.courseId.emit(this.course.id);
  }

}
