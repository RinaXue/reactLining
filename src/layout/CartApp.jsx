import React,{Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Order from '@/pages/Order'

class OrderApp extends Component{
  render(){
    return (
      <div className='box'>
        <Switch>
          <Route path='/cartapp/order' component={Order}/>>
        </Switch>
      </div>
    )
  }
}

export default OrderApp
