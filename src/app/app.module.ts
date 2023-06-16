import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ErrorInterceptor, JwtInterceptor, fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { StarshipsComponent } from './starships/starships.component';
import { WebService } from './services/web.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShipInfoComponent } from './ship-info/ship-info.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StarshipsComponent,
    WelcomeComponent,
    ShipInfoComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  WebService,
  fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
