import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {ExercisesComponent} from "./components";

const routes: Routes = [
  { path: '', component: ExercisesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
