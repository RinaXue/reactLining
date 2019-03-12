import React,{Component} from 'react';
import './Userhead.scss'
import { ActionSheet, Button } from 'antd-mobile';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class Userhead extends Component{
  constructor(props) {
    super(props);
  }
  showActionSheet = () => {
    const BUTTONS = ['拍照', '从手机相册选择','取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  }
  render(){
    return (
      <div className='head'>
        <div className="bg">
          <img src="/images/member_bg.png" alt=""/>
        </div>
        <div className="touxiang">
          <Button onClick={this.showActionSheet.bind(this)}>
            <img src="/images/qiaoba.jpg" alt=""/>
          </Button>
        </div>
        <div className="name">
        {console.log(this.props)}
          <div className="mz">{this.props.userid}</div>
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
}

export default Userhead
