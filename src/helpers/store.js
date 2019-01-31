import {createLogger} from 'redux-logger';
import {applyMiddleware, createStore, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from '../reducers/index';
import {coreMiddlewares} from '../core/middlewares/index';

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    ...coreMiddlewares,
    thunkMiddleware,
    loggerMiddleware
];

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            ...middleware
        ))
);