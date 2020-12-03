import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumbsService } from 'src/app/core/services/bread-crumb/bread-crumb.service';
import { Breadcrumb } from 'src/app/core/services/bread-crumb/model/bread-crumb';
import { CourseService } from 'src/app/core/services/course/course.service';
import { Course } from 'src/app/core/services/course/model/course';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.scss']
})
export class CourseEditorComponent implements OnInit {

  public breadcrumbs: Breadcrumb[];

  public course: Course;

  public isNew: boolean;

  constructor(
    private courseService: CourseService,
    private breadCrumbService: BreadCrumbsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  public ngOnInit(): void {
    this.breadcrumbs = this.breadCrumbService.getCoursePageCrumbs();

    if (this.route.snapshot.paramMap.get('id')) {
      const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
      this.breadcrumbs = this.breadCrumbService.getCourseEditorCrumbs(id);
      this.course = this.courseService.getItem(id);
      this.isNew = false;
    } else {
      this.breadcrumbs = this.breadCrumbService.getCoursePageCrumbs();
      this.course = new Course(-1, '', undefined, undefined, '', false, []);
      this.isNew = true;
    }
  }

  public cancel(): void {
    this.routeToCourses();
  }

  public save(): void {
    this.course.id = this.getId();
    this.course.date = new Date(this.course.date);
    this.courseService.addCourse(this.course);
    this.routeToCourses();
  }

  public update(): void {
    this.course.date = new Date(this.course.date);
    this.courseService.updateCourse(this.course);
    this.routeToCourses();
  }

  private routeToCourses(): void {
    this.router.navigate(['courses']);
  }
  private getId(): number {
    const curMaxId: number = Math.max(...this.courseService.getList().map(o => o.id));
    return curMaxId + 1;
  }
}
