import React, { Component } from 'react'
import api from '@/api/search/index'
import { Link } from 'react-router-dom'
import './Search.scss'

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      productList: []
    }
  }

  searchGoods () {
    let goodsName = document.getElementsByClassName('txt')[0].value
    api.requestSearch(goodsName).then(data => {
      this.setState({
        productList: data.data
      })
      console.log(this.state.productList)
    })
  }

  render () {
    let html = []
    this.state.productList.map((item, index) => {
      console.log('ok')
      html.push(
      <Link to={ '/detail/' + item.postID } className='searchWord'>
        <img src= { item.mainPic } alt=""/>
        <div className="detail">
          <div className="name">{ item.goodsName }</div>
          <div className="price">￥{ item.marketPrice }</div>
          <div className="clear"></div>
        </div>
      </Link>
      )
    })
    return (
      <div className="pageSearch">
        <header className="header">
        <span className='iconfont icon2fanhui' onClick = { () => { this.props.history.go(-1) } }></span>
          <div className="header-l">
              <span className='iconfont iconsousuo'></span>
              <input type="text" className='txt' placeholder='搜索商品' />
          </div>
          <div className="header-r" onClick= { this.searchGoods.bind(this) }>搜索</div>
        </header>
        <div className="list">
          <ul>
            { html }
          </ul>
        </div>
      </div>
    )
  }
}

export default Search
