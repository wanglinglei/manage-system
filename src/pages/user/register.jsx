import React, { Component } from 'react'
import InputBox from '../../components/common/InputBox'
import Button from '../../components/common/Button'
import registerCss from '../../assets/css/user/register.module.scss'
import axios from 'axios'
export default class register extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password1: '',
      password2: '',
      phoneNumber: '',
      resgister_set: [
        {
          name: 'userName',
          placeholder: '请输入用户名',
          iconLeft: 'icon-user',
          rule: /^[a-zA-Z0-9_]{6,8}$/,
          errorText: '6到8位（字母，数字，下划线）',
          autofocus: true
        },
        {
          name: 'password1',
          placeholder: '请输入密码',
          iconLeft: 'icon-passwd',
          rule: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
          iconRight: 'icon-icon-test1',
          errorText: '最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
        },
        {
          name: 'password2',
          placeholder: '请再次输入密码',
          iconLeft: 'icon-passwd',
          rule: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
          iconRight: 'icon-icon-test1',
          errorText: '最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
        },
        {
          name: 'phoneNumber',
          placeholder: '请输入手机号',
          iconLeft: 'icon-passwd',
          rule: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
          errorText: '请输入正确的手机号'
        }
      ]
    }
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  goLogin () {
    this.props.history.go(-1)
  }
  buttons = [
    {
      text: '返回登录',
      className: registerCss.leftButton,
      clickAction: this.goLogin.bind(this)
    }, {
      text: '立即注册',
      clickAction: this.register.bind(this)

    }
  ]
  async register () {
    const { userName, password1, password2, phoneNumber } = this.state;
    if (!userName || !password1 || !password2 || !phoneNumber) {
      return
    }
    if (password1 !== password2) {
      return
    }
    const [err, data] = await axios.post('/user_register', { userName, password1, password2, phoneNumber });
    if (err) {
      return
    } else {
      this.props.history.go(-1)
    }

  }
  render () {
    return (
      <div className={registerCss.registerPage}>
        <div className={registerCss.registerModel}>
          {this.state.resgister_set.map((value, index) => (
            <InputBox key={value.name} name={value.name} {...value} onChange={this.onChange.bind(this)} />
          ))}
          <Button buttons={this.buttons} />
        </div>
      </div>
    )
  }
}
