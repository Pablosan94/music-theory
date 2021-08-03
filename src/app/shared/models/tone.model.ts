import {ToneTypesEnum} from "@shared/enums";

export interface ToneModel {
  type: ToneTypesEnum;
  notes?: string[];
}
