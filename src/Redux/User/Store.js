import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { UserReducer } from './UserReducer';
const middlewares = [logger, thunk];

export const store = createStore(UserReducer, applyMiddleware(...middlewares));