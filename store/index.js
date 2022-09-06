import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { applyInterceptors } from "./axios";
import * as reducers from "./reducers";

const rootReducer = combineReducers(reducers);
const composeEnhance =
  (typeof window === "object" && window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

const store = createStore(rootReducer, composeEnhance(applyMiddleware(thunk)));

applyInterceptors(store.dispatch);

export default store;
