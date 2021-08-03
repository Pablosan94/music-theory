import {MIN_DESKTOP_WIDTH} from "@shared/constants";

export function isMobileWidth(width: number): boolean {
  return width < MIN_DESKTOP_WIDTH;
}
