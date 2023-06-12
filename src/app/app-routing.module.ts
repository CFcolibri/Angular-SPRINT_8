import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './starships/starships.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShipInfoComponent } from './ship-info/ship-info.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'starships', component: StarshipsComponent},
  { path: 'ship-info', component: ShipInfoComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
