import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class GuardRouter extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render () {
    return <this.props.component {...this.props} pathName={this.props.path} />;
  }
  componentWillMount () {
    if (this.props.meta) {
      if (this.props.meta.isAuthorization) {
        if (!localStorage.is_login) {
          this.props.history.push("/Register");
        }
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