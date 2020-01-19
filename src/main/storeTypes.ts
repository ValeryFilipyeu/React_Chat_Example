import { Store } from "redux";
import { PubnubThunkContext } from "pubnub-redux";
import { RootState } from "./rootReducer";
import { AppActions } from "./AppActions";

export type AppState = RootState;

export interface AppDispatch {
  <T extends AppActions>(action: T): T;
  <R>(anyThunk: ThunkAction<R>): R;
}

export type AppThunkContext = PubnubThunkContext;

export type ThunkAction<ThunkReturn = void> = (
  dispatch: AppDispatch,
  getState: () => AppState,
  context: AppThunkContext
) => ThunkReturn;

export type AppStore = Store<AppState, AppActions> & {
  dispatch: AppDispatch;
};
