import React,{Component} from 'react'
import Head from '@/components/common/Head/Head'
import Logincontent from '@/components/Login/Logincontent/Logincontent'

export default class Com extends Component{
  render () {
    return (
      <div className="content">
        <Head src={this.props} title="会员登入"/>
        <Logincontent history={this.props.history}/>
      </div>
    )
  }
}