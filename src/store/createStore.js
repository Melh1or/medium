import { combineReducers, applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import login from "./login";
import register from "./register";
import viewer from "./viewer";
import feed from "./feed";
import article from "./article";
import tags from "./tags";
import { saveToLocalStorage } from "../utils";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const rootReducer = combineReducers({
  login,
  register,
  viewer,
  feed,
  article,
  tags,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(() =>
  saveToLocalStorage("viewer", store.getState().viewer.viewer)
);

export default store;
