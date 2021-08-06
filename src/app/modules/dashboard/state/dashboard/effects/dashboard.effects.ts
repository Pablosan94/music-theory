import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {DashboardActions} from "../actions";
import {map, withLatestFrom} from "rxjs/operators";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";

@Injectable()
export class DashboardEffects {
  /*public addFavorite$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.addFavorite),
      withLatestFrom(),
      map((payload) => {DashboardActions.addFavorite(payload);
      })
    )
  );*/

  constructor(private actions$: Actions) {}
}
