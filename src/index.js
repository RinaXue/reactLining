import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './layout/App';
import UserApp from './layout/UserApp';
import DetailApp from './layout/DetailApp';
import SearchApp from './layout/SearchApp';
import 'antd-mobile/dist/antd-mobile.css';
import './main.scss';

require('./mock/mock')

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path='/search' component={SearchApp}></Route>
        <Route path='/detail' component={DetailApp}></Route>
        <Route path='/userapp' component={UserApp}/>
        <Route path='/' component ={App}/>
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);