import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  testimonialDeleteReducer,
  testimonialDetailsReducer,
  testimonialListReducer,
  testimonialCreateReducer,
  testimonialUpdateReducer,
} from "./reducers/testimonialReducers";

const reducer = combineReducers({
  testimonialList: testimonialListReducer,
  testimonialDetails: testimonialDetailsReducer,
  testimonialDelete: testimonialDeleteReducer,
  testimonialCreate: testimonialCreateReducer,
  testimonialUpdate: testimonialUpdateReducer,
}); // these all become available to our app state

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
