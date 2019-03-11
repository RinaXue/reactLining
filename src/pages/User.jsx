import React, { Component } from 'react'
import Userhead from '@/components/User/Userhead/Userhead'
import Userlist from '@/components/User/Userlist/Userlist'
import Head from '@/components/common/Head/Head'

export default class Com extends Component{
    render() {
        return(
            <div className="content">
              <Head src={this.props} title='个人中心'/>
              <Userhead/>
              <Userlist {...this.props}/>
            </div>
        )
    }
}
