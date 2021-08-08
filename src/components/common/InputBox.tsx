import React, { Component } from 'react'
import IconFont from './IconFonts'
import inputCss from '../../assets/css/components/common/input.module.scss'
import { isEmpty } from '../../utils/util'
declare interface InputProps {
  iconLeft?: string,  //左边图标
  labelname?: string,
  valuename?: string,
  iconRight?: string, //右边图标
  inputType?: string, //输入类型
  placeholder: string,
  name: string,
  onChange: any,
  onBlur: any,
  autofocus?: boolean,
  rule?: any, //输入校验规则 正则表达式
  errorText?: string //校验错误提示
}
interface Istate {
  testError: boolean
}
export default class inputBox extends Component<InputProps, Istate> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: InputProps) {
    super(props);
  }
  state: Istate = {
    testError: false
  }
  onChange = this.props.onChange
  handleBlur(e: any) {
    console.log(this.props.rule)
    if (isEmpty(this.props.rule)) {
      return
    } else {
      if (this.props.rule.test(e.target.value)) {
        this.setState({
          testError: false
        })
      } else {
        this.setState({
          testError: true
        })
      }

    }
  }
  render() {
    return (
      <div className={inputCss.inputBox}>
        <div className={inputCss.inputCont}>
          <IconFont type={this.props.iconLeft || ''} className={inputCss.iconFont} />
          <input className={inputCss.input}
            placeholder={this.props.placeholder}
            name={this.props.name}
            autoFocus={this.props.autofocus}
            onBlur={this.handleBlur.bind(this)}
            onChange={this.onChange} />
          <IconFont type={this.props.iconRight || ''} className={inputCss.iconFont} />
        </div>
        {this.props.rule && this.state.testError ? < div className={inputCss.inputErr}>
          <IconFont type='icon-icon-test2' className={inputCss.iconFontError} />
          {this.props.errorText}
        </div> : ''}
      </div>
    )
  }
}
