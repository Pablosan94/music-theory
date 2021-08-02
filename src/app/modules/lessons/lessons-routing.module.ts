import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {LessonsComponent} from "./components";

const routes: Routes = [
  { path: '', component: LessonsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
