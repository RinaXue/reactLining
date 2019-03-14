import React, {Component} from 'react'
import "./Cartpulglist.scss"
import {List, Checkbox, Flex, Button, WhiteSpace, WingBlank} from 'antd-mobile';

// const AgreeItem = Checkbox.AgreeItem;

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
            });
            let sum = 0;
            this.state.cartdata.forEach((item, index) => {
                if (item.hasChecked === true) {
                    sum += item.price * item.number
                }
            });
        } else {
            let newarr = this.state.arr.filter((item) => {
                return index !== item
            });
            this.setState({
                arr: newarr
            })
        }
        console.log(this.state.cartdata[index].hasChecked);
        this.state.cartdata[index].hasChecked = ! this.state.cartdata[index].hasChecked;
        localStorage.setItem('cartData', JSON.stringify(this.state.cartdata));
        // console.log(this.state.cartdata[index].hasChecked);
        this.totalPrice();
    }
    componentWillMount() {
        let newarr = [];
        this.state.arr && this.state.arr.map((item, index) => {
            newarr = this.state.cartdata.filter((ite, ind) => {
                return item === ind
            })
        });
        // console.log(newarr);
    }

    componentDidMount() {
        this.setState({
            cartdata: JSON.parse(localStorage.getItem("cartData"))
        });
        console.log(this.state.cartdata);
        this.props.onRef(this);
        this.props.onChoose(this.state.cartdata.length);
        console.log(this.state.cartdata.length);
    };

    changeDel() {
        // console.log(this.state.cartdata);
        this.state.arr && this.state.arr.forEach((item) => {
            this.setState({
                cartdata:this.state.cartdata.splice(item, 1)
            })
        });

        localStorage.setItem('cartData', JSON.stringify(this.state.cartdata));
        this.setState({
            cartdata: JSON.parse(localStorage.getItem("cartData"))
        });
        this.totalPrice();
    };

    totalPrice () {
        let sum = 0;
        this.state.cartdata.forEach((item, index) => {
            if (item.hasChecked === true) {
                sum += item.price * item.number
            }
        });
        this.setState({
            total: sum
        });
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
        this.totalPrice()
    }


    render() {
        let arr = [];
        this.state.cartdata.map((item, index) => {
            arr.push(
                <div className={"content"}>
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
                    <div className={"cart-content-list-foot"}>
                        <Button type="warning" className={"cart-content-list-footbutton"}>提交订单</Button>
                        <div className={"cart-content-list-foottotal"}>
                            <h5>合计：<span>{this.state.total}</span></h5>
                            {console.log(this.state.total)}
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className={"contentb"}>
                {/*<div className={"content"}>*/}
                    {arr}
                    {/*<div className={"cart-content-list-foot"}>*/}
                        {/*<Button type="warning" className={"cart-content-list-footbutton"}>提交订单</Button>*/}
                        {/*<div className={"cart-content-list-foottotal"}>*/}
                            {/*<h5>合计：<span>￥0.00</span></h5>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Cartpulglist