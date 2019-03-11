import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const List = ({ list }) => {
  // console.log(list[0])
  return (
      <ul className="movielist">
      {
        list.map((item, index) => {
          return (
            <Link to= { '/detail/' + item.postID } key = { index }>
              <div className="movieimg">
                <img src={ item.mainPic } alt={ item.alt } />
              </div>
              <div className="info">
                <p>{index} {item.goodsName}</p>
                <div className="price">
                  <p className="zhehou">￥{ item.discountPrice }  本月共卖出:{ item.salenum }件</p>
                  <p className="zheqian">￥{ item.marketPrice }</p>
                </div>
              </div>
            </Link>
          )
        })
      }
      </ul>
  )
}

List.propTypes = {
  list: PropTypes.array
}

export default List
