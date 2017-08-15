
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createInjectStore } from 'redux-injector';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js'
import App from './components/App.js';


let store = createInjectStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));


