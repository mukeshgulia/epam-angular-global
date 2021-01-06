import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Course } from '../course/model/course';
import { Breadcrumb } from './model/bread-crumb';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {

  constructor(private translate: TranslateService) {}

  public getCoursePageCrumbs(): Breadcrumb[] {

    const breadCrumbs: Breadcrumb[] = [];
    breadCrumbs.push(new Breadcrumb(this.translate.instant('course.text'), '/courses'));
    return breadCrumbs;

  }

  public getCourseEditorCrumbs(course: Course): Breadcrumb[] {

    const breadCrumbs: Breadcrumb[] = [];
    breadCrumbs.push(new Breadcrumb(this.translate.instant('course.text'), '/courses'));
    breadCrumbs.push(new Breadcrumb(course.name));
    return breadCrumbs;
  }
}
