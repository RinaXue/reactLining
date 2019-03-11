import React from 'react';
import { Link } from 'react-router-dom'
import './List.scss';

const List = () => (
  <div className="shoplist">
      <div className="tb_box">
          <h2 className="tb_tit">
              服饰
              <Link to='/kindlist' className='more'>更多&gt;</Link>
          </h2>
          <div className="tb_type">
            <Link to = '/detail/518856' className='tb_spe'>
              <img src="/images/t9.jpg" alt=""/>
            </Link>
            <Link to = '/detail/544508' className='tb_spe'>
              <img src="/images/t10.jpg" alt=""/>
            </Link>
            <Link to = '/detail/546508'>
              <img src="/images/t11.jpg" alt=""/>
            </Link>
            <Link to = '/detail/538524'>
              <img src="/images/t12.jpg" alt=""/>
            </Link>
          </div>
      </div>
      <div className="tb_box">
          <h2 className="tb_tit">
              鞋子
              <Link to='/kindlist' className='more'>更多&gt;</Link>
          </h2>
          <div className="tb_type">
            <Link to = '/detail/512590' className='tb_spe'>
              <img src="/images/t5.jpg" alt=""/>
            </Link>
            <Link to = '/detail/503572' className='tb_spe'>
              <img src="/images/t6.jpg" alt=""/>
            </Link>
            <Link to = '/detail/438426'>
              <img src="/images/t7.jpg" alt=""/>
            </Link>
            <Link to = '/detail/425857'>
              <img src="/images/t8.jpg" alt=""/>
            </Link>
          </div>
      </div>
      <div className="tb_box">
          <h2 className="tb_tit">
              背包
              <Link to='/kindlist' className='more'>更多&gt;</Link>
          </h2>
          <div className="tb_type">
            <Link to = '/detail/532362' className='tb_spe'>
              <img src="/images/t15.jpg" alt=""/>
            </Link>
            <Link to = '/detail/539483' className='tb_spe'>
              <img src="/images/t16.jpg" alt=""/>
            </Link>
            <Link to = '/detail/533521'>
              <img src="/images/t17.jpg" alt=""/>
            </Link>
            <Link to = '/detail/532386'>
              <img src="/images/t18.jpg" alt=""/>
            </Link>
          </div>
      </div>
    </div>
)

export default List
