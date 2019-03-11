import React,{Component} from 'react'
import api from '@/api/user'
import './Rescontent.scss'
import { List, InputItem, Toast, Button } from 'antd-mobile';
import {Link} from 'react-router-dom'

class Rescontent extends Component {
  constructor(props){
    super(props)
  }
  state = {
    phoneError: false,
    passwordError: false,
    adminError: false,
    phone: '15021275226',
    password: '',
    code: '',
    admin: '',
    disabled:false,
    msg: '发送验证码',
  }
  
  // 提示错误
  onErrorClick = () => {
    // 手机号码错误提示
    if (this.state.phoneError) {
      Toast.info('请输入11位正确手机的号码',2);
    }
    // 密码错误提示
    if (this.state.passwordError) {
      Toast.info('请设置6位以上的密码',2);
    }
    // 验证码错误提示
    if (this.state.adminError) {
      Toast.info('请输入正确的验证码',2)
    }
  }

  // 手机验证
  phoneonChange = (phone) => {

    if (phone.replace(/\s/g, '').length < 11 && phone != '') {
      this.setState({
        phoneError: true,
      });
    } else {
      this.setState({
        phoneError: false,
      });
    }
    this.setState({
      phone,
    });
  }

  // 密码验证
  passwordState (password) {
      if (password.length < 6 && password != '') {
        this.setState({
          passwordError: true
        })
      } else {
        this.setState({
          passwordError: false
        })
      }
      this.setState({
        password
      })
  }

  // 验证码验证
  adminState (admin) {
    console.log(admin)
    console.log(this.state.code===admin)
      if (this.state.code != admin && admin != '') {
        this.setState({
          adminError: true
        })
      } else {
        this.setState({
          adminError: false
        })
      }
      this.setState({
        admin
      })
  }

  //发送验证码
  sendCode (aphone) {
    if( this.state.phoneError === false && this.state.phone != '' && this.state.phone.length > 0 && this.state.passwordError === false && this.state.password != '' && this.state.password.length > 0 ){
      api.requestData(aphone)
      .then(data => {
        console.log(data)
        if (data === 1) {
          Toast.fail('该用户已注册',2)
        } else if (data === 0 ) {
          Toast.info('获取验证码失败',2)
        } else {
          console.log(data.code)
          this.state.code = data.code
          // this.state.admin = 123456
        }
      })
      let timer = null
      let time = 5
      timer = setInterval(() => {
        this.setState({disabled : true})
        this.setState({msg :time + '后重新发送'})
        time --
        if(time === 0) {
          this.setState({msg :'发送验证码'})
          this.setState({disabled : false})
          clearInterval(timer)
        }
      },1000)
    } else {
      Toast.info('请填写正确的手机号码和密码',2)
    }
  }
  // 注册
  register (username, password) {
    console.log(username)
    console.log(password)
    api.resData({'username':username,'password':password})
    .then(data => {
      console.log(data)
      if (data === 2) {
        Toast.fail('该用户已注册',2)
      } else if (data === 0) {
        Toast.fail('注册失败',2)
      } else {
        Toast.info('注册成功',2)
        localStorage.setItem('isLogin','ok')
        this.props.history.push({pathname:'/home'})
      }
    })
  }

  render() {
    // let disabled = false
    let zcdisableb = true
    if( this.state.phoneError === false && this.state.passwordError === false && this.state.adminError === false && this.state.admin.length>0 && this.state.phone.length > 0 && this.state.password.length > 0 ) {
      zcdisableb = false
    }
    return (
      <div className='bian'>
        {/* 输入框 */}
        <List>
          <InputItem
            type="number"
            placeholder="请输入手机号码"
            error={this.state.phoneError}
            onErrorClick={this.onErrorClick}
            onChange={this.phoneonChange}
            value={this.state.phone}
            clear
          />
          <InputItem
            type="password"
            placeholder="请输入密码"
            error={this.state.passwordError}
            onErrorClick={this.onErrorClick}
            onChange={this.passwordState.bind(this)}
            value={this.state.password}
            clear
          />
          <InputItem
            type="number"
            placeholder="请输入验证码"
            error={this.state.adminError}
            onErrorClick={this.onErrorClick}
            onChange={this.adminState.bind(this)}
            value={this.state.admin}
            maxLength='5'
            clear
            extra={<Button 
              type='primary'
              size="small" 
              inline 
              disabled={this.state.disabled}
              onClick={ this.sendCode.bind(this,this.state.phone) }
              >{this.state.msg}</Button>}
          />
        </List>
        {/* 注册按钮 */}
        <div className="zc">
          <Button
            type='primary'
            onClick={this.register.bind(this,this.state.phone,this.state.password)}
            disabled={zcdisableb}
            >注册</Button>
        </div>
        {/* 去登入的文字 */}
        <div className='qdr'>
          <p>
            已有账号？
            <Link to='/userapp/login'>去登入</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default Rescontent