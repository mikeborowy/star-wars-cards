import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import rootReducers from '../reducers';

export const initStore = (initialState) => {
    return createStore (
        rootReducers, 
        applyMiddleware(thunk, reduxPromise)
    );
};
