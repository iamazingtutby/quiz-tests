import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'

// function loggerMiddleWare(store) {
//     return function (next) {
//         return function (action) {
//             const result = next(action)
//             console.log('loggerMiddleWare result', result)
//             console.log('loggerMiddleWare result', store.getState())
//
//             return result
//         }
//     }
// }

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const loggerMiddleWare = store => next => action => {
    const result = next(action)
    console.log('loggerMiddleWare result', result)
    console.log('loggerMiddleWare store', store.getState())

    return result
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
    loggerMiddleWare,
    reduxThunk
)));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
