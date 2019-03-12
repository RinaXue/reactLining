import React,{Component} from 'react'
import Head from '@/components/common/Head/Head'
import Orderlist from '@/components/Order/Orderlist/Orderlist'

export default class Com extends Component{
  render(){
    return (
      <div className='content'>
        <Head src={this.props} title='我的订单'/>
        <Orderlist {...this.props}/>
      </div>
    )
  }
}