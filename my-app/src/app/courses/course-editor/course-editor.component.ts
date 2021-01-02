import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BreadCrumbsService } from 'src/app/core/services/bread-crumb/bread-crumb.service';
import { Breadcrumb } from 'src/app/core/services/bread-crumb/model/bread-crumb';
import { Author } from 'src/app/core/services/course/model/author';
import { Course } from 'src/app/core/services/course/model/course';
import { AppState, authorsAll, courseById } from 'src/app/core/store/app.state';
import { dateValidator } from '../../shared/directives/date.validator.directive';
import {
  editCourse,
  addCourse,
} from 'src/app/core/store/courses/actions/course.actions';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { numberValidator } from 'src/app/shared/directives/number.validator.directive';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.scss'],
})
export class CourseEditorComponent implements OnInit, OnDestroy {
  private course: Course;
  public breadcrumbs: Breadcrumb[];
  public authors: Author[] = [];
  public isNew: boolean;

  public allAuthors: Author[];
  public authorSubscription: Subscription;


  public courseEditForm: FormGroup = this.fb.group({
    title: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
    description: ['', Validators.compose([Validators.required, Validators.maxLength(500)])],
    creationDate: ['', [Validators.required, dateValidator()]],
    duration: ['', [Validators.required, numberValidator()]],
    topRated: [''],
    authors: ['', Validators.required]
  });


  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private breadCrumbService: BreadCrumbsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.authorSubscription = this.store
      .select(authorsAll)
      .pipe(filter(a => !!a))
      .subscribe((a) => {
        this.allAuthors = a;
      });

    if (this.route.snapshot.paramMap.get('id')) {
      const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);

      this.store.select(courseById, { id }).subscribe((res) => {
        this.course = _.cloneDeep(res[0]);
        if (this.course) {
          this.breadcrumbs = this.breadCrumbService.getCourseEditorCrumbs(
            this.course
          );
          this.setFormControlsInitValues();
          this.isNew = false;
          this.authors = this.course.authors;
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
    this.updateFromFormControls();
    this.store.dispatch(addCourse({ course: this.course }));
  }

  public update(): void {
    this.updateFromFormControls();
    this.store.dispatch(editCourse({ course: this.course }));
  }

  public onauthorsChange(newAutors: Author[]): void {
    this.course.authors = newAutors;
    this.courseEditForm.get('authors').setValue(JSON.stringify(newAutors));
  }

  public get title(): AbstractControl | null {
    return this.courseEditForm.get('title');
  }

  public get description(): AbstractControl | null {
    return this.courseEditForm.get('description');
  }

  public get creationDate(): AbstractControl | null {
    return this.courseEditForm.get('creationDate');
  }

  public get duration(): AbstractControl | null {
    return this.courseEditForm.get('duration');
  }

  public get topRated(): AbstractControl | null {
    return this.courseEditForm.get('topRated');
  }

  private setFormControlsInitValues(): void {
    this.courseEditForm.get('title').setValue(this.course.name);
    this.courseEditForm.get('description').setValue(this.course.description);
    this.courseEditForm.get('creationDate').setValue(this.course.date);
    this.courseEditForm.get('duration').setValue(this.course.length);
    this.courseEditForm.get('topRated').setValue(this.course.isTopRated);
    this.courseEditForm.get('authors').setValue(JSON.stringify(this.course.authors));
  }

  private updateFromFormControls(): void {
    this.course.name = this.courseEditForm.get('title').value;
    this.course.description = this.courseEditForm.get('description').value;
    this.course.date = this.courseEditForm.get('creationDate').value;
    this.course.length = this.courseEditForm.get('duration').value;
    this.course.isTopRated = this.courseEditForm.get('topRated').value;
  }


  private routeToCourses(): void {
    this.router.navigate(['courses']);
  }

  private getId(): number {
    return Math.random() * 1000;
  }

}
