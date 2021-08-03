import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardComponent} from "./components/card/card.component";
import {ThemeToggleComponent} from './components/theme-toggle/theme-toggle.component';
import {ThemeToggleContainerComponent} from './components/theme-toggle-container/theme-toggle-container.component';
import {StoreModule} from "@ngrx/store";
import {uiFeatureName, uiReducer} from "@shared/state/ui/reducers";
import {ToneService} from "@shared/services/tone/tone.service";
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(uiFeatureName, uiReducer)
  ],
  declarations: [
    CardComponent,
    ThemeToggleComponent,
    ThemeToggleContainerComponent,
    TagComponent
  ],
  exports: [
    CardComponent,
    ThemeToggleContainerComponent
  ],
  providers: [
    ToneService
  ]
})
export class SharedModule { }
