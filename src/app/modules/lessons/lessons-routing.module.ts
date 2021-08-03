import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {LessonComponent, LessonsComponent} from "./components";

const routes: Routes = [
  {
    path: '',
    component: LessonsComponent,
    children: [
      { path: ':lesson', component: LessonComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
