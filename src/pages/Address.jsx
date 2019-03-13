import React,{Component} from 'react'
import Head from '@/components/common/Head/Head'
import Addresslist from '@/components/Address/Addresslist/Addresslist'

class Com extends Component{
  render(){
    return(
      <div className="content">
        <Head src={this.props} title='收货地址'/>
        <Addresslist {...this.props}/>
      </div>
    )
  }
}

export default Com