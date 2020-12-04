import { Injectable } from '@angular/core';
import { Course } from '../course/model/course';
import { Breadcrumb } from './model/bread-crumb';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {

  constructor() {}

  public getCoursePageCrumbs(): Breadcrumb[] {

    const breadCrumbs: Breadcrumb[] = [];
    breadCrumbs.push(new Breadcrumb('Courses', '/courses'));
    return breadCrumbs;

  }

  public getCourseEditorCrumbs(course: Course): Breadcrumb[] {

    const breadCrumbs: Breadcrumb[] = [];
    breadCrumbs.push(new Breadcrumb('Courses', '/courses'));
    breadCrumbs.push(new Breadcrumb(course.name));
    return breadCrumbs;
  }
}
