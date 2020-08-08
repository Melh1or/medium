import { combineReducers, applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import login from "./login";
import register from "./register";
import viewer from "./viewer";
import feed from "./feed";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const rootReducer = combineReducers({
  login,
  register,
  viewer,
  feed,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;