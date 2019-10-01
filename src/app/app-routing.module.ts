import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AnimalOneComponent } from './animal/animal-one/animal-one.component';
import { LoginComponent } from './authentication/login/login.component';

import { ConnectComponent } from './connect/connect.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'animals',component:AnimalOneComponent},
  {path:'login',component:LoginComponent},
  {path:'connect',component:ConnectComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
