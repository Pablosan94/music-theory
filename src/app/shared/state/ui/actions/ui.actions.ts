import {createAction, props, union} from "@ngrx/store";
import {PaletteTypesEnum} from "@shared/enums/palette-types.enum";

export const setPalette = createAction(
  '[UI] Palette changed',
  props<{ payload: PaletteTypesEnum }>()
);

const actions = {
  setPalette
};

const uiActionsUnion = union(actions);

export type UiActionsType = typeof uiActionsUnion;

export const UiActions = actions;
