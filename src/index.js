import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { getPosts } from './creators'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer.js'

const store = createStore(reducer)
getPosts(store.dispatch)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();