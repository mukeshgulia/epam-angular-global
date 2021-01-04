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

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthHeaderInterceptor } from '../core/interceptors/auth.header.interceptor';
import { LoadingComponent } from '../loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    LogoComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LoginModule,
    CoursesModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    }
  ],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
