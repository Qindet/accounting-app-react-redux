import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {BrowserRouter} from "react-router-dom";
import {createStore,compose,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from "./reducers";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const logger = store => next=>action => {
    const result = next(action)
    console.log('sf', store.getState())
    return result
}


const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)))
window.store=store
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);