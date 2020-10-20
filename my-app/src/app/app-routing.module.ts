import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

// Task 2: Basic redirect route
const routes: Routes = [
  {
    path: 'courses',
    component: MainLayoutComponent
  },
  {   path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
