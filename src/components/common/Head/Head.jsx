import React from 'react'
import './Head.scss'
import { NavBar, Icon } from 'antd-mobile'

const Head = (props) => {
  return (
    <div>
      <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => props.src.history.go(-1)}
    >{props.title}</NavBar>
    </div>
  )
}

export default Head