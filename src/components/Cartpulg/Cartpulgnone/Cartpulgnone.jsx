import React, { Component } from 'react'
import "./Cartpulgnone.scss"
import {NavLink} from "react-router-dom";

class Cartpulgnone extends Component{
    render() {
        return(
            <div className={"content"}>
                <div className={"cart-content-none"} >
                    <h6 className={"iconfont icon-cart cart-content-none-icon"}></h6>
                    <h6 className={"cart-content-none-title"}>购物车内还没有商品，快去选购吧~</h6>
                    <NavLink to = "/home" className={"cart-content-none-a"}>
                        <i>随便逛逛</i>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Cartpulgnone