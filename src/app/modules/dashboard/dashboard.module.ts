import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './components';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SharedModule} from "@shared/shared.module";
import {SearchbarModule} from "../searchbar/searchbar.module";

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
  ]
})
export class DashboardModule { }
