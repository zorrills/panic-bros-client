import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appHistory from '../util/history';

const rootReducer = combineReducers({
    router: connectRouter(appHistory),
});

export default rootReducer;
