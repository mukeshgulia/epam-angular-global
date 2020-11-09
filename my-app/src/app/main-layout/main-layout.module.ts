import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCourseComponent } from './../add-course/add-course.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { CourseComponent } from './../course/course.component';
import { CoursesPageComponent } from './../courses-page/courses-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './../search/search.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddCourseComponent,
    BreadcrumbsComponent,
    CourseComponent,
    CoursesPageComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    LogoComponent,
    SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
