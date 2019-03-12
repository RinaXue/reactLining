import React, { Component } from 'react'
import Userhead from '@/components/User/Userhead/Userhead'
import Userlist from '@/components/User/Userlist/Userlist'
import Head from '@/components/common/Head/Head'

export default class Com extends Component{
    state={
      userid:''
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
