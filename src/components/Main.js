import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom';
// import {Home, About, Contact} from './view'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Vote from './Vote'
import { provider } from 'react-redux'






const Main = () => (
    <Switch>
        <Route exact path='/' component={Vote}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
    </Switch>
);

export default Main