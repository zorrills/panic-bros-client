import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { routerMiddleware } from 'connected-react-router'

import appHistory from '../util/history';

import rootReducer from './rootReducer';

export const HYDRATE_STATE = 'HYDRATE_STATE';

// If we ever do server-side rendering, the initial state needs to check
// for pre-hydrated data, probably in window.__initialState
const initialState = {};

function makeHydratable(reducer, hydrateActionType) {
    return function (state, action) {
        switch (action.type) {
            case hydrateActionType:
                return reducer(action.state, action);
            default:
                return reducer(state, action);
        }
    };
}

const configureStore = () => {
    const store = createStore(
        makeHydratable(rootReducer, HYDRATE_STATE),
        initialState,
        compose(applyMiddleware(thunkMiddleware, routerMiddleware(appHistory)),
            typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f),
    );

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./rootReducer', () => {
                store.replaceReducer(rootReducer);
            });
        }
    }

    return store;
};

export default configureStore;
