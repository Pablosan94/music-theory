import { Component, OnInit } from '@angular/core';
import {PaletteTypesEnum} from "@shared/enums";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {getCurrentPalette} from "@shared/state/ui/selectors";

@Component({
  selector: 'app-theme-toggle-container',
  templateUrl: './theme-toggle-container.component.html',
  styleUrls: ['./theme-toggle-container.component.scss']
})
export class ThemeToggleContainerComponent implements OnInit {
  public palette$: Observable<PaletteTypesEnum>;

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.palette$ = this.store$.pipe(select(getCurrentPalette))
  }
}
