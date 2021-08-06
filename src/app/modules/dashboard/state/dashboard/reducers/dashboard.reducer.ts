import {Action, createReducer, on} from "@ngrx/store";
import {CardModel} from "@shared/models";
import {DashboardActions} from "../actions";
import {UiActions} from "@shared/state/ui/actions";

export interface DashboardState {
  favorites: CardModel[];
  mostRecent: CardModel[];
}

export const initialDashboardState: DashboardState = {
  favorites: [],
  mostRecent: []
}

const reducer = createReducer(
  initialDashboardState,
  on(DashboardActions.addFavorite, (state, { payload }) => {
    const favs = [...state.favorites];
    favs.push(payload);

    return {
      ...state,
      favorites: favs
    }
  }),
  on(DashboardActions.removeFavorite, (state, { payload }) => {
    const favs = [...state.favorites];

    if (favs) {
      favs.splice(favs.indexOf(payload), 1)
    }

    return {
      ...state,
      favorites: favs
    }
  }),
  on(DashboardActions.addMostRecent, (state, { payload }) => {
    const mr = [...state.mostRecent];
    mr.push(payload);

    return {
      ...state,
      mostRecent: mr
    }
  }),
);

export const dashboardReducer = (
  state: DashboardState | undefined,
  action: Action
): DashboardState => {
  return reducer(state, action);
}
