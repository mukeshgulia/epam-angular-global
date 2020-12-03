import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ AppComponent, PageNotFoundComponent ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MainLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
