import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import doctorLkReducer from "./reducers/doctorLK";
import testingReducer from "./reducers/testing";

const rootReducer = combineReducers({
  testingReducer,
  authReducer,
  doctorLkReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
