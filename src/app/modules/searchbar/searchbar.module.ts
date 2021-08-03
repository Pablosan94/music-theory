import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchbarComponent} from './components';

@NgModule({
  declarations: [
    SearchbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchbarComponent
  ]
})
export class SearchbarModule { }
