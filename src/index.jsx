import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Root from './root/Root';
import configureStore from './root/store';

const appRoot = document.getElementById('root');

export const store = configureStore();

//Start the app
ReactDOM.render(<Root store={store} />, appRoot);