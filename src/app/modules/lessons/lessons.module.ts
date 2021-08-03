import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LessonsComponent, LessonComponent} from "./components";
import {LessonsRoutingModule} from "./lessons-routing.module";

@NgModule({
  imports: [
    CommonModule,
    LessonsRoutingModule
  ],
  declarations: [
    LessonsComponent,
    LessonComponent
  ],
  exports: [
    LessonsComponent
  ]
})
export class LessonsModule { }
