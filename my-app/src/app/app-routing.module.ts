import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CourseEditorComponent } from './courses/course-editor/course-editor.component';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Task 2: Basic redirect route
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesPageComponent, canActivate: [AuthGuard] },
  { path: 'courses/new', component: CourseEditorComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: CourseEditorComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
