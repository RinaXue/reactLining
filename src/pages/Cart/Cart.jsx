import React, {Component} from 'react'
import "./Cart.scss"
import Cartpulgnone from "../../components/Cartpulg/Cartpulgnone/Cartpulgnone";
import Cartpulglist from "../../components/Cartpulg/Cartpulglist/Cartpulglist";

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state={
            cartdata:[],
        };
        this.setState.cartdata=JSON.parse(localStorage.getItem("cartData"))||[];
    };
    cilckme(){
        this.child.changeDel();
    };
    onref=(ref)=>{
        this.child=ref;
    };
    componentWillMount(){
      let isLogin = localStorage.getItem('isLogin')
      if(isLogin != 'ok'){
        this.props.history.push('/userapp/login')
      }
    }
    // componentDidMount() {
    //     this.setState({
    //         cartdata: JSON.parse(localStorage.getItem("cartData"))
    //     });
    // };


    render() {
        return (
            <div className={"content"}>
                <div className={"cart-top"}>
                    <span className={"iconfont icon-back cart-top-l"} onClick={() => {
                        this.props.history.go(-1)
                    }}/>
                    <span className={"cart-top-c"}>购物车</span>
                    <span className={"cart-top-r"} onClick={this.cilckme.bind(this)}>删除</span>
                </div>
                {/* {console.log(this.state.cartdata.length)} */}
                {this.state.cartdata.length > 0 ? <Cartpulglist onRef={this.onref} /> : <Cartpulgnone/>}
            </div>
        )
    }
}

export default Cart;