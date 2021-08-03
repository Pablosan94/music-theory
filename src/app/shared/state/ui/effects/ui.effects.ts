import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";

@Injectable()
export class UiEffects {
  /*public testEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UiActions.setPalette),
      map((payload) => UiActions.setPalette(payload))
    )
  );*/

  constructor(private actions$: Actions) {}
}
