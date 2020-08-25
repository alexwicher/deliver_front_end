import reducer from './reducer';
import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));