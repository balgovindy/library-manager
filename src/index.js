import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from './Components/Main';
import reducer from './Store/reducer';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>
    , document.getElementById('root'));
