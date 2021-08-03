import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PaletteTypesEnum} from "@shared/enums/palette-types.enum";
import RpropOr from "ramda/es/propOr";
import {uiFeatureName, UiState} from "@shared/state/ui/reducers";

export const getSettingsContentState = createFeatureSelector<UiState>(uiFeatureName);

export const getCurrentPalette = createSelector(
  getSettingsContentState,
  (state): PaletteTypesEnum => RpropOr('', 'palette')(state)
)
