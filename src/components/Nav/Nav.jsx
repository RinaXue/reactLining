import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Nav.scss"

const Nav = props =>(
    <div className={"nav"}>
        <ul>
            <NavLink to = "/home">
                <h6 className={"iconfont icon-all"}></h6>
                <i>首页</i>
            </NavLink>
            <NavLink to = "/kind">
                <h6 className={"iconfont icon-category"}></h6>
                <i>分类</i>
            </NavLink>
            <NavLink to = "/cart">
                <h6 className={"iconfont icon-cart"}></h6>
                <i>购物车</i>
            </NavLink>
            <NavLink to = "/user">
                <h6 className={"iconfont icon-account"}></h6>
                <i>我的</i>
            </NavLink>
        </ul>
    </div>
);
export default Nav;