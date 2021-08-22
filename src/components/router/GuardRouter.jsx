import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { isEmpty } from "../../utils/util"
class GuardRouter extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render () {
    return (
      this.props.component ? <this.props.component {...this.props} pathName={this.props.path} /> :
        this.props.children.map((item, index) => {
          <item.component pathName={item.path} key={'component' + index} />
        })
    )
  }
  componentWillMount () {
    console.log(this.props, 'props');
    if (this.props.meta?.isAuthorization) {
      // if (!localStorage.is_login) {
      //   this.props.history.push("/Register");
      // }
      try {
        const userInfo = localStorage.getItem('user_info');
        if (isEmpty(userInfo)) {
          this.props.history.push('/login')
        } else {
          if (Date.now() - userInfo.last_login_time > 15 * 24 * 60 * 60 * 1000) {
            this.props.history.push('/login')
          }
        }
      } catch (error) {
        console.log(error);
        this.props.history.push('/login')
      }
    }
  }
  componentDidMount () {
    //每次进入页面时 回到顶部
    if (this.props.history.action === "PUSH") {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  }
}

export default withRouter(GuardRouter);
