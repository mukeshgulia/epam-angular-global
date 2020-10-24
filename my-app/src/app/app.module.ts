import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent} from './main-layout/main-layout.component';
import { ContentProjectionComponent } from './main-layout/content-projection/content-projection.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { LogoComponent } from './main-layout/logo/logo.component';
import { BreadcrumbsComponent } from './main-layout/content-projection/breadcrumbs/breadcrumbs.component';
import { CourseComponent } from './main-layout/content-projection/course/course.component';
import { CoursesPageComponent } from './main-layout/content-projection/courses-page/courses-page.component';
import { SearchComponent } from './main-layout/content-projection/search/search.component';
import { AddCourseComponent } from './main-layout/content-projection/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    CourseComponent,
    CoursesPageComponent,
    SearchComponent,
    AddCourseComponent,
    MainLayoutComponent,
    ContentProjectionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
