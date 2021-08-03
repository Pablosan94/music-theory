import {ActionReducer} from "@ngrx/store";
import {AppState} from "../reducers";

export function loggerMetaReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  // @ts-ignore
  return (state: AppState, action: any): AppState => {
    const commonCss = 'font-weight: bold; font-size: 110%';

    console.log('%c action', `color: #47a0e2; ${commonCss}`, action);

    const stateAfter = reducer(state, action);

    console.log('%c state after', `color: #5abd83; ${commonCss}`, stateAfter);

    return stateAfter;
  };
}
