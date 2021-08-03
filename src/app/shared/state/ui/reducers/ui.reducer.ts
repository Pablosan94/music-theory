import {Action, createReducer, on} from "@ngrx/store";
import {PaletteTypesEnum} from "@shared/enums/palette-types.enum";
import {UiActions} from "@shared/state/ui/actions";

export interface UiState {
  palette: PaletteTypesEnum;
}

export const initialUiState: UiState = {
  palette: PaletteTypesEnum.DARK
}

const reducer = createReducer(
  initialUiState,
  on(UiActions.setPalette, (state, { payload }) => ({
    ...state,
    palette: payload
  }))
);

export const uiReducer = (
  state: UiState | undefined,
  action: Action
): UiState => {
  return reducer(state, action);
}
