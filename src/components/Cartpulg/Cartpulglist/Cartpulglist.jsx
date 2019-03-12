import React, {Component} from 'react'
import "./Cartpulglist.scss"
import {List, Checkbox, Flex, Button, WhiteSpace, WingBlank} from 'antd-mobile';

const AgreeItem = Checkbox.AgreeItem;

class Cartpulglist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 1,
            cartdata: [],
            currenIndex: null,
            arr: [],
            num: 1,
        };
    };

    ckeckedMe(index, ev) {
        if (ev.target.checked) {
            this.setState({
                arr: [...this.state.arr, index]
            })
        } else {
            let newarr = this.state.arr.filter((item) => {
                return index !== item
            });
            this.setState({
                arr: newarr
            })
        }
    }
    componentWillMount() {
        let newarr = [];
        this.state.arr && this.state.arr.map((item, index) => {
            newarr = this.state.cartdata.filter((ite, ind) => {
                return item === ind
            })
        });
        console.log(newarr);
    }

    componentDidMount() {
        this.setState({
            cartdata: JSON.parse(localStorage.getItem("cartData"))
        });
        // console.log(this.state.cartdata);
        this.props.onRef(this);
    };

    changeDel() {
        // console.log(this.state.cartdata);
        // let brr = [];
        this.state.arr && this.state.arr.forEach((item) => {
            this.setState({
                cartdata:this.state.cartdata.splice(item, 1)
            })
        });
        // this.state.cartdata.splice(this.state.currenIndex,1);
        // console.log(this.state.cartdata);
        localStorage.setItem('cartData', JSON.stringify(this.state.cartdata));
        this.setState({
            cartdata: JSON.parse(localStorage.getItem("cartData"))
        });
    };

    changeNum(type, obj, e) {
        if (type === -1) {
            obj.number -= 1;
            if (obj.number < 1) {
                obj.number = 1
            }
        } else {
            obj.number += 1
        }
        let newArr = JSON.parse(localStorage.getItem('cartData'));
        newArr.map((item, index) => {
            if (item.id === obj.id) {
                item.number = obj.number
            }
        });
        this.setState({
            cartdata: newArr
        });
    }


    render() {
        let arr = [];
        this.state.cartdata.map((item, index) => {
            arr.push(
                <div className={"cart-content-list"} key={index}>
                    <div className={"cart-content-list-check"}>
                        <input type="checkbox" name="checkbox" onClick={this.ckeckedMe.bind(this, index)}/>
                    </div>
                    <div className={"cart-content-list-card"}>
                        <img src={item.pictrue} alt=""/>
                        <h4>{item.name}</h4>
                        <h5>￥{item.price}</h5>
                    </div>
                    <div className={'cart-content-list-num'}>
                        <div className={'cart-content-list-num-l'}>
                            <p>小计：<span>{item.price * item.number}</span></p>
                        </div>
                        <h6 onClick={this.changeNum.bind(this, -1, item)}><span>-</span></h6>
                        <h5><span id='goodsNum'>{item.number}</span></h5>
                        <h6 onClick={this.changeNum.bind(this, +1, item)}><span>+</span></h6>
                    </div>
                </div>
            )
        });
        return (
            <div className={"contentb"}>
                <div className={"content"}>
                    {arr}
                    <div className={"cart-content-list-foot"}>
                        <Button type="warning" className={"cart-content-list-footbutton"}>提交订单</Button>
                        <div className={"cart-content-list-foottotal"}>
                            <h5>合计：<span>￥0.00</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cartpulglist