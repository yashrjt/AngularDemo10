import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalOneComponent } from './animal-one/animal-one.component';


@NgModule({
  declarations: [AnimalOneComponent],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    SharedModule
  ],
  exports:[AnimalOneComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AnimalModule { }
