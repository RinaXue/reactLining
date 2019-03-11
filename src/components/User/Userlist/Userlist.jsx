import React,{Component} from "react";
import "./Userlist.scss";
import { List, Grid, Button } from "antd-mobile";
import { Link } from "react-router-dom";

const Item = List.Item;
let TabArray = [
  { icon: "/images/order_bg_3.png", text: `待付款` },
  { icon: "/images/order_bg_2.png", text: `待发货` },
  { icon: "/images/order_bg_1.png", text: `待收获` },
  { icon: "/images/order_bg.png", text: `已完成` }
];
let TabArray2 = [
  { icon: "/images/order_bg_5.png", text: `我的收藏` },
  { icon: "/images/order_bg_8.png", text: `我的评论` },
  { icon: "/images/order_bg_4.png", text: `收件箱` },
  { icon: "/images/order_bg_7.png", text: `系统消息` }
];
const data = TabArray.map((_val, i) => ({
  icon: _val.icon,
  text: _val.text
}));
const data2 = TabArray2.map((_val, i) => ({
  icon: _val.icon,
  text: _val.text
}));

class Usrtlist extends Component {
  constructor(props){
    super(props)
  }
  //退出登入
  dr () {
    this.props.history.push('/userapp/res')
  }
  //查看订单
  xqing(){
    this.props.history.push('/dingdan')
  }

  render(){
    console.log(this.props)
    return (
      <div>
        <List>
          <Item
            thumb="/images/member_img16.png"
            arrow="horizontal"
            extra="查看内容"
            onClick={() => {}}
          >
            我的订单
          </Item>
        </List>
        <div>
          <Grid data={data} hasLine={false} className="Tab" onClick={this.xqing.bind(this)}/>
          <Grid data={data2} hasLine={true} className="Tab" />
        </div>
        <List>
          <Item
            thumb="/images/order_bg_10.png"
            arrow="horizontal"
            onClick={() => {}}
          >
            常见问题
          </Item>
          <Item
            thumb="/images/order_bg_9.png"
            arrow="horizontal"
            onClick={() => {}}
          >
            意见反馈
          </Item>
        </List>
        {/* <Button onClick={this.dr.bind(this)}>退出登入</Button> */}
        <Link to="/kind">退出登入</Link>
      </div>
    );
  }
};

//history.push({pathname:'/login'})

export default Usrtlist;
