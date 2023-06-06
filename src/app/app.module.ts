import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChildShipComponent } from './child-ship/child-ship.component';
import { StarshipService } from './starship.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildShipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StarshipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
