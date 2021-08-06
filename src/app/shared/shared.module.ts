import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardComponent} from "./components/card/card.component";
import {ThemeToggleComponent} from './components/theme-toggle/theme-toggle.component';
import {ThemeToggleContainerComponent} from './components/theme-toggle-container/theme-toggle-container.component';
import {StoreModule} from "@ngrx/store";
import {uiFeatureName, uiReducer} from "@shared/state/ui/reducers";
import {ToneService} from "@shared/services/tone/tone.service";
import { TagComponent } from './components/tag/tag.component';
import { DividerComponent } from './components/divider/divider.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {dashboardFeatureName, dashboardReducer} from "../modules/dashboard/state/dashboard/reducers";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(dashboardFeatureName, dashboardReducer),
    StoreModule.forFeature(uiFeatureName, uiReducer)
  ],
  declarations: [
    CardComponent,
    ThemeToggleComponent,
    ThemeToggleContainerComponent,
    TagComponent,
    DividerComponent,
    DropdownComponent
  ],
  exports: [
    CardComponent,
    ThemeToggleContainerComponent,
    DividerComponent
  ],
  providers: [
    ToneService
  ]
})
export class SharedModule { }
