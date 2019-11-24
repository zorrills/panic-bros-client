import React from 'react';
import { Provider } from 'react-redux';

import Router from './routes';
import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router component={App} store={store}/>
    </Provider>
);

export default Root;