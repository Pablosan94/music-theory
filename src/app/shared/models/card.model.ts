import {ToneModel} from "@shared/models/tone.model";
import {TagModel} from "@shared/models/tag.model";

export interface CardModel {
  title: string;
  description: string;
  aliases?: string[];
  tags?: TagModel[];
  tone?: ToneModel;
}
