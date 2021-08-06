import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {LibraryComponent} from "./components";

const routes: Routes = [
  { path: '', component: LibraryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
