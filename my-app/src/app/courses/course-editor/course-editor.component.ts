import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BreadCrumbsService } from 'src/app/core/services/bread-crumb/bread-crumb.service';
import { Breadcrumb } from 'src/app/core/services/bread-crumb/model/bread-crumb';
import { Author } from 'src/app/core/services/course/model/author';
import { Course } from 'src/app/core/services/course/model/course';
import { AppState, courseById } from 'src/app/core/store/app.state';
import {
  editCourse,
  addCourse,
} from 'src/app/core/store/courses/actions/course.actions';
import * as _ from 'lodash';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.scss'],
})
export class CourseEditorComponent implements OnInit {
  public breadcrumbs: Breadcrumb[];
  public course: Course;
  public authors: string;
  public isNew: boolean;

  constructor(
    private store: Store<AppState>,
    private breadCrumbService: BreadCrumbsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);

      this.store.select(courseById, { id }).subscribe((res) => {
        this.course = _.cloneDeep(res[0]);
        if (this.course) {
          this.authors = Array.from(
            this.course.authors.values(),
            (v) => `${v.name} ${v.lastName}`
          ).join(',');
          this.course.authors = [];
          this.breadcrumbs = this.breadCrumbService.getCourseEditorCrumbs(
            this.course
          );
          this.isNew = false;
        }
      });
    } else {
      this.breadcrumbs = this.breadCrumbService.getCoursePageCrumbs();
      this.course = new Course(-1, '', undefined, undefined, '', false, []);
      this.authors = Array.from(
        this.course.authors.values(),
        (v) => `${v.name} ${v.lastName}`
      ).join(',');
      this.isNew = true;
    }
  }

  public cancel(): void {
    this.routeToCourses();
  }

  public save(): void {
    console.log(this.course);
    this.course.id = this.getId();
    this.fixAuthors();
    this.store.dispatch(addCourse({ course: this.course }));
  }

  public update(): void {
    this.fixAuthors();
    this.store.dispatch(editCourse({ course: this.course }));
  }

  private routeToCourses(): void {
    this.router.navigate(['courses']);
  }

  private getId(): number {
    return Math.random() * 1000;
  }

  private fixAuthors(): void {
    this.authors.split(',').map((a) => {
      const args = a.trim().split(' ');
      let lastName;
      let name;
      if (args.length > 0) {
        name = args[0];
        lastName = args.slice(1).toString();
      } else {
        name = args.toString();
        lastName = '';
      }
      const author: Author = new Author(this.getId(), name, lastName);
      this.course.authors.push(author);
    });
  }
}
