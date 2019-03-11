import React,{Component} from 'react'
import { List, InputItem, Checkbox, Flex, Button, WhiteSpace, WingBlank, Toast  } from 'antd-mobile'
import './Logincontent.scss'
import api from '@/api/user'

const AgreeItem = Checkbox.AgreeItem;

class Logincontent extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasError: false,
      value: '15021275226',
      hasPasswordError: false,
      passwordvalue: '123456'
    }
  }
  //手机号码提示
  onErrorClick = () => {
    if ( this.state.hasError ) {
      Toast.info('请输入11位正确手机的号码',2)
    }
  }
  //密码提示
  onPasswordErrorClick = () => {
    if ( this.state.haspasswordError ) {
      Toast.info('请设置6位以上的密码',2)
    }
  }
  //手机号码正则验证
  onChange (value) {
    if (value.replace(/\s/g, '').length < 11 && value != '') {
      this.setState({
        hasError: true
      })
    } else {
      this.setState({
        hasError: false
      })
    }
    this.setState({
      value
    })
    console.log(this.state.value)
  }
  //密码正则验证
  onPasswordChange (passwordvalue) {
    if (passwordvalue.replace(/\s/g, '').length < 5 && passwordvalue != '') {
      this.setState({
        hasPasswordError: true
      })
    } else {
      this.setState({
        hasPasswordError: false
      })
    }
    this.setState({
      passwordvalue
    })
    console.log(this.state.passwordvalue)
  }
  //登入验证
  loginFn ( username, password ) {
    console.log(username,password)
    api.loginData({username,password})
    .then(data => {
      console.log(data)
      if (data === 1) {
        Toast.success('登入成功',2)
        this.props.history.push({pathname:'/home'})
        localStorage.setItem('isLogin','ok')
      } else if (data === -1) {
        Toast.info('密码错误',2)
      } else if (data === 2) {
        Toast.info('该用户没有注册',2)
      } else {
        Toast.fail('登入失败',2)
      }
    })
  }
  // 跳转注册
  handle(){
    // console.log(this)
    this.props.history.push({pathname:'/userapp/res'})
    //window.location.href='/res' //刷新跳转,不推荐
  }

  render() {
    let type = ''
    let disabled = true
    if (this.state.hasError === false && this.state.hasPasswordError === false && this.state.value.length > 0 && this.state.passwordvalue.length > 0) {
      type = 'primary'
      disabled =false
    }
    return (
      <div className='contentt'>
        {/* 表单 */}
        <List>
          <InputItem
            type='text'
            clear
            placeholder='请输入您的手机号'
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange.bind(this)}
            value={this.state.value}
          />
          <InputItem
            type='password'
            clear
            placeholder='请输入您的密码'
            error={this.state.hasPasswordError}
            onErrorClick={this.onPasswordErrorClick.bind(this)}
            onChange={this.onPasswordChange.bind(this)}
            value={this.state.passwordvalue}
          />
        </List>
        {/* 复选框 */}
        <Flex>
          <Flex.Item>
            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
              记住我 <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>忘记密码</a>
            </AgreeItem>
          </Flex.Item>
        </Flex>
        {/* 按钮 */}
        <WingBlank>
          <WhiteSpace />
          <Button 
          type={type}
          disabled = {disabled}
          inline
          size="large"
          className='anniu'
          onClick={this.loginFn.bind(this,this.state.value,this.state.passwordvalue)}
          >登入</Button>
          <Button type="primary" inline size="large" className='anniu' onClick={this.handle.bind(this)}>注册</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Logincontent