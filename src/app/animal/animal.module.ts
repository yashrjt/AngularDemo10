import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalOneComponent } from './animal-one/animal-one.component';
import { HttpClientModule } from '@angular/common/http';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AnimalOneComponent, DogComponent, CatComponent],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    SharedModule,
    HttpClientModule,RouterModule
  ],
  exports:[AnimalOneComponent,CatComponent,DogComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AnimalModule { }
