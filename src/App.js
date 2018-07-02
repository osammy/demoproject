import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Button, form, input, ButtonToolbar, Button } from 'react-bootstrap'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Vote from './components/Vote';
import PropTypes from 'prop-types'
import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const App =({ store })=>{
  // alert('render app.js')
return (<Provider store={store}>

<BrowserRouter>
<Switch>
<Route path="/" component={Vote} />
<Route exact path="/main" component={Main} />
</Switch>

</BrowserRouter>
</Provider>)
}

// App.propTypes = {
//   store:PropTypes.object.isRequired
// }
  


export default App;
