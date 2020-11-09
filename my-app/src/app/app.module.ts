import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ AppComponent, LoginComponent ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MainLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
