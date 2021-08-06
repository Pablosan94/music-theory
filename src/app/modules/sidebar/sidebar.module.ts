import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SidebarComponent, SidebarLinkComponent} from "./components";
import {AppRoutingModule} from "../../app-routing.module";
import {SharedModule} from "@shared/shared.module";

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    SidebarComponent,
    SidebarLinkComponent
  ],
  exports: [
    SidebarComponent,
    SidebarLinkComponent
  ]
})
export class SidebarModule { }
