import {UrlSegment} from "@angular/router";
import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {RouterReducerState} from "@ngrx/router-store";
import {RouterStateUrlModel} from "@shared/models";
import {AppState} from "../reducers";

import Rprop from "ramda/es/prop";
import RpropOr from "ramda/es/propOr";

export const routerFeatureName = 'router';

const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrlModel>>(
  routerFeatureName
);

const getRouterStateUrl: MemoizedSelector<AppState, RouterStateUrlModel> = createSelector(
  getRouterState,
  Rprop('state')
);

const getUrlSegments: MemoizedSelector<AppState, UrlSegment[] | unknown> = createSelector(
  getRouterStateUrl,
  RpropOr([], 'urlSegments')
)
