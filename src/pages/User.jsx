import React, { Component } from 'react'
import Userhead from '@/components/User/Userhead/Userhead'
import Userlist from '@/components/User/Userlist/Userlist'
import Head from '@/components/common/Head/Head'

export default class Com extends Component{
  state={
    userid:''
  }
  componentWillMount(){
    let isLogin = localStorage.getItem('isLogin')
    if(isLogin != 'ok'){
      this.props.history.push('/userapp/login')
    }
  }
  componentDidMount(){
    this.setState({
      userid:localStorage.getItem('Id') || ''
    })
  }
  render() {
    return(
      <div className="content">
        <Head src={this.props} title='个人中心'/>
        <Userhead {...this.props} userid={this.state.userid}/>
        <Userlist {...this.props}/>
      </div>
    )
  }
}
