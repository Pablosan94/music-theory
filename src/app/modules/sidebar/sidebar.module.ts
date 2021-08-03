import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SidebarComponent, SidebarLinkComponent} from "./components";
import {AppRoutingModule} from "../../app-routing.module";
import { SidebarContainerComponent } from './components/sidebar-container/sidebar-container.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  declarations: [
    SidebarComponent,
    SidebarLinkComponent,
    SidebarContainerComponent
  ],
  exports: [
    SidebarComponent,
    SidebarLinkComponent,
    SidebarContainerComponent
  ]
})
export class SidebarModule { }
