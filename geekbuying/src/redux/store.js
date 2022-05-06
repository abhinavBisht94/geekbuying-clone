import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
import thunk from 'redux-thunk'
 


// create store here
export const store=createStore(reducer,applyMiddleware(thunk));