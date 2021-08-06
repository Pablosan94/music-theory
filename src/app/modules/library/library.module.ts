import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LibraryComponent} from './components';
import {LibraryRoutingModule} from "./library-routing.module";
import {SharedModule} from "@shared/shared.module";
import {SearchbarModule} from "../searchbar/searchbar.module";
import {SearchService} from "@shared/services/search/search.service";

@NgModule({
    imports: [
      CommonModule,
      LibraryRoutingModule,
      SharedModule,
      SearchbarModule
    ],
  declarations: [
    LibraryComponent
  ],
  exports: [
    LibraryComponent
  ],
  providers: [
    SearchService
  ]
})
export class LibraryModule { }
