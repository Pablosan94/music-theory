import {createAction, props, union} from "@ngrx/store";
import {PaletteTypesEnum} from "@shared/enums/palette-types.enum";
import {CardModel} from "@shared/models";

export const addFavorite = createAction(
  '[Dashboard] Add favorite',
  props<{ payload: CardModel }>()
);

export const removeFavorite = createAction(
  '[Dashboard] Remove favorite',
  props<{ payload: CardModel }>()
);

export const addMostRecent = createAction(
  '[Dashboard] Add most recent',
  props<{ payload: CardModel }>()
);

const actions = {
  addFavorite,
  removeFavorite,
  addMostRecent
};

const dashboardActionsUnion = union(actions);

export type DashboardActionsType = typeof dashboardActionsUnion;

export const DashboardActions = actions;
