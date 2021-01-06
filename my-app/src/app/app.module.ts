import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/store/app.state';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/store/auth/effects/auth.effects';
import { AuthorEffects } from './core/store/authors/effects/author.effects';
import { CoursesEffects } from './core/store/courses/effects/course.effects';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [ AppComponent, PageNotFoundComponent ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MainLayoutModule,
    StoreModule.forRoot(reducers, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AuthEffects, CoursesEffects, AuthorEffects]),
    NoopAnimationsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
