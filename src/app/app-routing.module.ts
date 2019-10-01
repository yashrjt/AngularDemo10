import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

import { LoginComponent } from './authentication/login/login.component';

import { ConnectComponent } from './connect/connect.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'animals',loadChildren:'./animal/animal.module#AnimalModule'},
  {path:'login',component:LoginComponent},
  {path:'connect',component:ConnectComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
