import React,{Component} from 'react'
import Head from '@/components/common/Head/Head'
import Favoriteslist from '@/components/Favorites/Favoriteslist/Favoriteslist'

export default class Com extends Component{
  render(){
    return(
      <div className="content">
        <Head src={this.props} title='我的收藏'/>
        <Favoriteslist {...this.props}/>
      </div>
    )
  }
}