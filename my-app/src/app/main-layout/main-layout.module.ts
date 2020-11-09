import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCourseComponent } from './content-projection/add-course/add-course.component';
import { BreadcrumbsComponent } from './content-projection/breadcrumbs/breadcrumbs.component';
import { CourseComponent } from './content-projection/course/course.component';
import { CoursesPageComponent } from './content-projection/courses-page/courses-page.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './content-projection/search/search.component';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from '../core/pipes/duration.pipe';
import { OrderByPipe } from '../core/pipes/order-by.pipe';
import { DateHelper } from '../core/utils/date-helper';
import { HighlightDirective } from '../core/directives/highlight.directive';
import { FilterPipe } from '../core/pipes/filter.pipe';

@NgModule({
  declarations: [
    AddCourseComponent,
    BreadcrumbsComponent,
    CourseComponent,
    CoursesPageComponent,
    ContentProjectionComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    LogoComponent,
    SearchComponent,
    HighlightDirective,
    DurationPipe,
    OrderByPipe
],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DateHelper, FilterPipe],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
