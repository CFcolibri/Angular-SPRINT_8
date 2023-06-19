import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StarshipsComponent } from './starships/starships.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShipInfoComponent } from './ship-info/ship-info.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'starships', component: StarshipsComponent,  canActivate: [AuthGuard]},
  { path: 'ship-info/:id', component: ShipInfoComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
