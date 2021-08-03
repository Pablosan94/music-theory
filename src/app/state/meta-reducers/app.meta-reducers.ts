import {environment} from "../../../environments/environment";
import {loggerMetaReducer} from "./logger.meta-reducer";

export const appMetaReducers = environment.IS_LOCAL ? [loggerMetaReducer] : [];
