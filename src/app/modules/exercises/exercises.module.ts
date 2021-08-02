import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExercisesComponent} from "./components";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ExercisesComponent
  ],
  declarations: [
    ExercisesComponent
  ]
})
export class ExercisesModule { }
