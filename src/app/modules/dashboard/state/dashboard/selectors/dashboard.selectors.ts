import {createFeatureSelector, createSelector} from "@ngrx/store";
import RpropOr from "ramda/es/propOr";
import {dashboardFeatureName, DashboardState} from "../reducers";
import {CardModel} from "@shared/models";

export const getDashboardState = createFeatureSelector<DashboardState>(dashboardFeatureName);

export const getFavorites = createSelector(
  getDashboardState,
  (state): CardModel[] => RpropOr([], 'favorites')(state)
);

export const getMostRecent = createSelector(
  getDashboardState,
  (state): CardModel[] => RpropOr([], 'mostRecent')(state)
);
