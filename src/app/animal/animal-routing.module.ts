import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalOneComponent } from './animal-one/animal-one.component';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';


const routes: Routes = [
  {path:'',component:AnimalOneComponent,
  children:[
    {path:'dogs',component:DogComponent},
    {path:'cats',component:CatComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
