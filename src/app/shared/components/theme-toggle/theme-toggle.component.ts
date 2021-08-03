import {Component, Input} from '@angular/core';
import {PaletteTypesEnum} from "@shared/enums";
import {Store} from "@ngrx/store";
import {UiActions} from "@shared/state/ui/actions";

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
  @Input() public palette: PaletteTypesEnum;
  public PaletteTypesEnum = PaletteTypesEnum;

  constructor(private store$: Store) {}

  public togglePalette(palette: PaletteTypesEnum): void {
    this.store$.dispatch(UiActions.setPalette({ payload: palette }));
  }
}
