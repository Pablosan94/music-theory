import {createAction, props, union} from "@ngrx/store";
import {PaletteTypesEnum} from "@shared/enums/palette-types.enum";

export const applicationInitialized = createAction('[App] Application initialized');

const actions = {
  applicationInitialized
};

const pageInitializationActionsUnion = union(actions);

export type PageInitializationActionsType = typeof pageInitializationActionsUnion;

export const PageInitializationActions = actions;
