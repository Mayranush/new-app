import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Component1 from './components/component1/component1';
import Component2 from './components/component2/component2';
import NotFound from './components/not-found/not-found';
import store from './store';

const routing = (
    <Provider store={ store }>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/component1">Component1</Link>
                    </li>
                    <li>
                        <Link to="/component2/5">Component2</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={ App } />
                    <Route path="/component1" component={ Component1 } />
                    <Route path="/component2/:id" component={ Component2 } />
                    <Route component={ NotFound } />
                </Switch>
            </div>
        </Router>
    </Provider>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





