import React, {Component} from 'react'
import "./Cart.scss"
import Cartpulgnone from "../../components/Cartpulg/Cartpulgnone/Cartpulgnone";
import Cartpulglist from "../../components/Cartpulg/Cartpulglist/Cartpulglist";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartdata: [],
            leng: ''
        };
    };

    cilckme() {
        this.child.changeDel();
    };

    onref = (ref) => {
        this.child = ref;
    };
    onchoose = (choose) => {
        this.setState({
            leng: choose
        })

    };

    componentDidMount() {
        this.setState({
            cartdata: JSON.parse(localStorage.getItem("cartData")),
            leng: JSON.parse(localStorage.getItem("cartData")).length
        });
    };

    render() {
        let str = this.state.leng!==0 ? <Cartpulglist onRef={this.onref} onChoose={this.onchoose}/> : <Cartpulgnone/>;
        return (
            <div className={"content"}>
                <div className={"cart-top"}>
                    <span className={"iconfont icon-back cart-top-l"} onClick={() => {
                        this.props.history.go(-1)
                    }}/>
                    <span className={"cart-top-c"}>购物车</span>
                    <span className={"cart-top-r"} onClick={this.cilckme.bind(this)}>删除</span>
                </div>
                {/*{console.log("长度", this.state.leng)}*/}
                {str}
            </div>
        )
    }
}

export default Cart;