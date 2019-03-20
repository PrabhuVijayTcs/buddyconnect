import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'registration', component:RegistrationComponent},
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule',
  },
  { path: '',   redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
