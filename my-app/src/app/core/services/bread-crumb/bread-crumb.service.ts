import { Injectable } from '@angular/core';
import { CourseService } from '../course/course.service';
import { Breadcrumb } from './model/bread-crumb';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {

  constructor(private courseService: CourseService) { }

  public getCoursePageCrumbs(): Breadcrumb[] {

    const breadCrumbs: Breadcrumb[] = [];
    breadCrumbs.push(new Breadcrumb('Courses', '/courses'));
    return breadCrumbs;

  }

  public getCourseEditorCrumbs(id: number): Breadcrumb[] {

    const breadCrumbs: Breadcrumb[] = [];
    breadCrumbs.push(new Breadcrumb('Courses', '/courses'));
    const courseName = this.courseService.getItem(id).title;
    breadCrumbs.push(new Breadcrumb(courseName));
    return breadCrumbs;

  }
}
