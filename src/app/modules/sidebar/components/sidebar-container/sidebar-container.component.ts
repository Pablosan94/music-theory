import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {PaletteTypesEnum} from "@shared/enums";
import {getCurrentPalette} from "@shared/state/ui/selectors";

@Component({
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss']
})
export class SidebarContainerComponent implements OnInit {
  public palette$: Observable<PaletteTypesEnum>;

  public isSidebarActive: boolean = false;

  @Output() public sidebarActive: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private store$: Store<any>) {}

  public ngOnInit(): void {
    this.palette$ = this.store$.pipe(select(getCurrentPalette));
  }

  public onToggleSidebar(isSidebarActive: boolean) {
    this.isSidebarActive = isSidebarActive;
    this.sidebarActive.emit(this.isSidebarActive);
  }
}
