import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './components';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SharedModule} from "@shared/shared.module";
import {SearchbarModule} from "../searchbar/searchbar.module";
import {ExampleService} from "@shared/services/example/example.service";

@NgModule({
    imports: [
      CommonModule,
      DashboardRoutingModule,
      SharedModule,
      SearchbarModule
    ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    ExampleService
  ]
})
export class DashboardModule { }
