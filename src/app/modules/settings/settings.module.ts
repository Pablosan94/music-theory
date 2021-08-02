import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingsComponent} from "./components";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SettingsComponent
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
