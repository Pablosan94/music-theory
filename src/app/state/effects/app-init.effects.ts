import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PageInitializationActions} from "../actions";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";

@Injectable()
export class AppInitEffects {
  public appInitEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PageInitializationActions.applicationInitialized),
      tap(() => {
        console.log('Application Initialized')
      })
    ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
