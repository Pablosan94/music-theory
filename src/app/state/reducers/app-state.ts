import * as fromRouterStore from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';
import {RouterStateUrlModel} from "@shared/models";

export interface AppState {
  router: fromRouterStore.RouterReducerState<RouterStateUrlModel>
}

export const appReducer: ActionReducerMap<AppState> = {
  router: fromRouterStore.routerReducer
}
