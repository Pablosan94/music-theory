import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from "@ngrx/store";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarModule} from "./modules/sidebar/sidebar.module";
import {SearchbarModule} from "./modules/searchbar/searchbar.module";
import {appReducer} from "./state/reducers";
import {AppInitEffects} from "./state/effects";
import {appMetaReducers} from "./state/meta-reducers";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {SharedModule} from "@shared/shared.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      SidebarModule,
      SearchbarModule,
      StoreModule.forRoot(appReducer, {
        metaReducers: appMetaReducers,
        runtimeChecks: {strictStateImmutability: true, strictActionImmutability: true}
      }),
      EffectsModule.forRoot([AppInitEffects]),
      StoreRouterConnectingModule.forRoot(),
      SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
