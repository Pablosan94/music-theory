import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {PaletteTypesEnum} from "@shared/enums/palette-types.enum";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public PaletteTypesEnum = PaletteTypesEnum;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Settings');
  }
}
