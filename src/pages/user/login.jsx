import React, { Component } from 'react'

import { Form, Input, Button, Radio, Checkbox, Space } from 'antd';
import loginCss from '../../assets/css/user/login.module.scss'
import { getTimePeriod } from '../../utils/util'
import InputBox from '../../components/common/InputBox'
import axios from 'axios'
export default class login extends Component {
  constructor() {
    super()
    this.state = {
      titleTime: '',
      userName: '',
      password: '',
      rememberPwd: false,
      userName_set: {
        placeholder: '请输入用户名',
        iconLeft: 'icon-user',
        rule: /^[a-zA-Z0-9_]{6,8}$/,
        errorText: '6到8位（字母，数字，下划线）',
        autofocus: true
      },
      password_set: {
        placeholder: '请输入密码',
        iconLeft: 'icon-passwd',
        rule: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
        iconRight: 'icon-icon-test1',
        errorText: '最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
      }
    }
  }
  componentWillMount () {
    const titleTime = getTimePeriod();
    this.setState({
      titleTime
    })
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  async loginIn () {
    const { userName, password } = this.state;
    console.log(userName, 'userName', this.state)
    if (!userName && !password) {
      return
    } else {
      const [err, data] = await axios.post('/user_login_in', { userName, password });
      console.log(err, data)
      if (err) {
        return
      } else {
        if (data.login_status === '1') {
          localStorage.setItem('user_info', {
            ...data.user_info,
            last_login_time: this.state.rememberPwd ? Date.now() : null
          })
        }
        this.props.history.push('/')
      }
    }
  }
  changeRememberPwd (e) {
    this.setState({
      rememberPwd: e.target.checked
    })
  }
  goResgiter () {
    console.log(this);
    this.props.history.push('/register')
  }
  render () {
    return (
      <div className={loginCss.page}>
        <div className={loginCss.loginModel}>
          <div className={loginCss.title}>{this.state.titleTime}好,请登录</div>
          <InputBox name='userName' {...this.state.userName_set} onChange={this.onChange.bind(this)} />
          <InputBox name='password' {...this.state.password_set} onChange={this.onChange.bind(this)} />
          <Checkbox className={loginCss.Checkbox} onChange={this.changeRememberPwd.bind(this)}>记住密码</Checkbox>
          <div className={loginCss.buttons}>
            <Button type="primary" className={loginCss.goLogin} onClick={this.loginIn.bind(this)}>立即登录</Button>
            <Button type="primary" className={loginCss.goResgiter} onClick={this.goResgiter.bind(this)}>申请账号</Button>
          </div>
        </div>
      </div>
    )
  }
}
