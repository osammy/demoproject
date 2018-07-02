import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import Vote from './components/Vote';
import {contestantReducer, nameReducer } from './reducers';
const store = createStore(
    combineReducers({contestants:contestantReducer,name:nameReducer})
);



function render() {
console.log(store.getState())
ReactDOM.render(

<App store={store} />

    , document.getElementById('root'));
}

// registerServiceWorker();


store.subscribe(render);
render();
if (module.hot) {
module.hot.accept();
}
