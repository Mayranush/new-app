import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { combineEpics } from 'redux-observable';
import { component1Reducer } from './components/component1/model/component1.reducer';
import { component1Epic } from './components/component1/model/component1.epics';
import { createEpicMiddleware } from 'redux-observable';

const reducers = combineReducers({
    component1Reducer
});

const rootEpic = combineEpics(
    component1Epic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    reducers,
    compose(
        applyMiddleware(epicMiddleware)
    )
);

epicMiddleware.run(rootEpic);

// Link to store object saved to window to grant access to it for test purposes
// Do not use it directly in code
if (window && !window.store) {
    window.store = store;
}

export default store;
