import {Component, Input} from '@angular/core';
import {DividerEnum} from "@shared/components/divider/divider.enum";
import {PaletteTypesEnum} from "@shared/enums";

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
  @Input() public orientation: DividerEnum = DividerEnum.VERTICAL;
  @Input() public palette?: PaletteTypesEnum = PaletteTypesEnum.DARK;

  public DividerEnum = DividerEnum;
  public PaletteTypesEnum = PaletteTypesEnum;

  constructor() { }
}
