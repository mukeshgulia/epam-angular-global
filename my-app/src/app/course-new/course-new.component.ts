import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../core/services/course/course.service';
import { Course } from '../core/services/course/model/course';

@Component({
  selector: 'app-course-new',
  templateUrl: './course-new.component.html',
  styleUrls: ['./course-new.component.scss']
})
export class CourseNewComponent implements OnInit {

  public course: Course;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.course = new Course(-1, '', undefined, undefined, '', false);
  }

  public cancel(): void {
    this.router.navigate(['courses']);
  }

  public save(): void {
    this.course.id = this.getId();
    this.course.creationDate = new Date(this.course.creationDate);
    this.courseService.addCourse(this.course);
    this.router.navigate(['courses']);
  }

  private titleExists(): boolean {
    return this.courseService
    .getList()
    .filter(c  => c.title.toLowerCase === this.course.title.toLowerCase).length > 0;
  }
  private getId(): number {
    const curMaxId: number = Math.max(...this.courseService.getList().map(o => o.id));
    return curMaxId + 1;
  }
}
