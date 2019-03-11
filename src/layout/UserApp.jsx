import React,{Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Res from '@/pages/Res'
import Login from '@/pages/Login'

class UserApp extends Component {
  render() {
    return (
      <div className='box'>
        <Switch>
          <Route path='/userapp/login' component={Login}/>
          <Route path='/userapp/res' component={Res}/>
        </Switch>
      </div>
    )
  }
}

export default UserApp