import reducer from './reducer';
import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userloginReducer'] //Only this reducers's states shall persist
};

const persistedReducer = persistReducer(persistConfig, reducer);
const middleWares = [thunk, logger];

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleWares)));
let persistor = persistStore(store);

export {store, persistor};
