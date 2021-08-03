import {DOCUMENT} from "@angular/common";
import {Component, Inject, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PaletteTypesEnum} from "@shared/enums";
import {Subscription} from "rxjs";
import {getCurrentPalette} from "@shared/state/ui/selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public subscription: Subscription = new Subscription();
  public isSidebarActive: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document,
              private store$: Store<any>) {
  }

  public onSidebarActive(sidebarActive: boolean) {
    this.isSidebarActive = sidebarActive;
  }

  public getPalette(): string {
    let palette = '';
    this.subscription.add(
      this.store$.pipe(select(getCurrentPalette)).subscribe(p => {
          p === PaletteTypesEnum.DARK
            ? palette = 'dark'
            : palette = 'light'
      })
    );

    this.document.body.classList.add(palette);

    if (palette === PaletteTypesEnum.DARK) {
      this.document.body.classList.remove(PaletteTypesEnum.LIGHT);
    } else if (palette === PaletteTypesEnum.LIGHT) {
      this.document.body.classList.remove(PaletteTypesEnum.DARK);
    }

    return palette;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
