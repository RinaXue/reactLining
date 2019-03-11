import React, { Component } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Kind from '../pages/Kind';
import Cart from '../pages/Cart/Cart';
import User from '../pages/User';
import KindList from '../pages/KindList';
import Nav from "../components/Nav/Nav";

class  App extends Component{
    render(){
        return(
            <div className="box">
                <Switch>
                    <Route path="/kindlist" component={ KindList }/>
                    <Route path="/home" component = {Home}/>
                    <Route path="/kind" component = {Kind}/>
                    <Route path="/cart" component = {Cart}/>
                    <Route path="/user" component = {User}/>
                    <Redirect path="/" to="/home"/>
                </Switch>
                <Nav />
            </div>
        )
    }
}
export default App

