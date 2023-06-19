import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { StarshipsComponent } from './starships/starships.component';
import { WebService } from './services/web.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShipInfoComponent } from './ship-info/ship-info.component';

import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';



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
