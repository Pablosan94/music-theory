import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExercisesComponent} from "./components";
import {ExercisesRoutingModule} from "./exercises-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ExercisesRoutingModule
  ],
  exports: [
    ExercisesComponent
  ],
  declarations: [
    ExercisesComponent
  ]
})
export class ExercisesModule { }
