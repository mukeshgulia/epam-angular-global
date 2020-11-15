import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CourseNewComponent } from './course-new/course-new.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { LoginComponent } from './login/login.component';

// Task 2: Basic redirect route
const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'courses/new', component: CourseNewComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
