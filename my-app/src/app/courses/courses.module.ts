import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from '../search/search.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddCourseComponent,
    CourseItemComponent,
    CourseEditorComponent,
    CoursesPageComponent,
    SearchComponent,
    BreadcrumbsComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule, RouterModule],
})
export class CoursesModule {}
