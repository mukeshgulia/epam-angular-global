import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BreadCrumbsService } from 'src/app/core/services/bread-crumb/bread-crumb.service';
import { Breadcrumb } from 'src/app/core/services/bread-crumb/model/bread-crumb';
import { Author } from 'src/app/core/services/course/model/author';
import { Course } from 'src/app/core/services/course/model/course';
import { AppState, authorsAll, courseById } from 'src/app/core/store/app.state';
import {
  editCourse,
  addCourse,
} from 'src/app/core/store/courses/actions/course.actions';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.scss'],
})
export class CourseEditorComponent implements OnInit, OnDestroy {
  public breadcrumbs: Breadcrumb[];
  public course: Course;
  public authors: string;
  public isNew: boolean;

  public allAuthors: Author[];
  public authorSubscription: Subscription;
  constructor(
    private store: Store<AppState>,
    private breadCrumbService: BreadCrumbsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.authorSubscription = this.store
      .select(authorsAll)
      .pipe(filter(authors => !!authors))
      .subscribe((authors) => {
        this.allAuthors = authors;
      });

    if (this.route.snapshot.paramMap.get('id')) {
      const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);

      this.store.select(courseById, { id }).subscribe((res) => {
        this.course = _.cloneDeep(res[0]);
        if (this.course) {
          this.breadcrumbs = this.breadCrumbService.getCourseEditorCrumbs(
            this.course
          );
          this.isNew = false;
        }
      });
    } else {
      this.breadcrumbs = this.breadCrumbService.getCoursePageCrumbs();
      this.course = new Course(-1, '', undefined, undefined, '', false, []);
      this.isNew = true;
    }
  }

  public ngOnDestroy(): void {
    this.authorSubscription.unsubscribe();
  }

  public cancel(): void {
    this.routeToCourses();
  }

  public submit(): void {
    this.isNew ? this.save() : this.update();
  }

  public save(): void {
    console.log(this.course);
    this.course.id = this.getId();
    this.store.dispatch(addCourse({ course: this.course }));
  }

  public update(): void {
    this.store.dispatch(editCourse({ course: this.course }));
  }

  public onauthorsChange(newAutors: Author[]): void {
    console.log(JSON.stringify(newAutors));
    this.course.authors = newAutors;
  }

  private routeToCourses(): void {
    this.router.navigate(['courses']);
  }

  private getId(): number {
    return Math.random() * 1000;
  }
}
