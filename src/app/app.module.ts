import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { StarshipsComponent } from './starships/starships.component';
import { WebService } from './services/web.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { ShipInfoComponent } from './ship-info/ship-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StarshipsComponent,
    WelcomeComponent,
    ShipInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
