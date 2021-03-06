import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout.component';
import { LogoComponent } from './logo/logo.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';
import { CoursesModule } from '../courses/courses.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LoginModule,
    CoursesModule
  ],
  providers: [],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
