import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/core/services/course/model/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CourseItemComponent {

  // Task 2
  @Output() public courseId = new EventEmitter<number>();

  // Task 2
  @Input() public course: Course;


  constructor( private router: Router) { }

  public edit(): void {
    console.log(`Editing course id: ${this.course.id}`);
    this.router.navigate(['courses', this.course.id]);
  }

  public delete(): void {
    this.courseId.emit(this.course.id);
  }

}
