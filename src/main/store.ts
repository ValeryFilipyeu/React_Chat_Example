import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { AppStore, AppThunkContext } from "./storeTypes";
import preloadedState from "./preloadedState";

export const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const createAppStore = (thunkContext: AppThunkContext): AppStore => {
  const storeEnhancer = composeEnhancers(
    applyMiddleware(ReduxThunk.withExtraArgument(thunkContext))
  );

  return createStore(rootReducer, preloadedState, storeEnhancer);
};
