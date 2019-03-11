import React from 'react';
import './Userhead.scss'

const Userhead = (props) => {
  return (
    <div className='head'>
      <div className="bg">
        <img src="/images/member_bg.png" alt=""/>
      </div>
      <div className="touxiang">
        <img src="/images/noavatar.png" alt=""/>
      </div>
      <div className="name">
        <div className="mz">小丸子</div>
      </div>
      <div className="xingxi">
        <a href="#">账户管理、收货地址></a>
      </div>
      <div className="mingpian">
        <img src="/images/member_mp_img.png" alt=""/>
      </div>
    </div>
  )
}

export default Userhead