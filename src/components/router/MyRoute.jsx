import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import GuardRouter from "./GuardRouter";

export class MyRoute extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  componentWillMount () {
    console.log(this.props, 'routerpeops');
  }
  render () {
    return (
      <Route>
        <Switch>
          {this.props.router.map(v => (
            <Route
              key={v.path}
              exact={v.exact}
              path={v.path}
              render={() => <GuardRouter {...v}></GuardRouter>}
            ></Route>

          ))}
          <Redirect to={"/error"} from="*"></Redirect>
        </Switch>
      </Route>
    )
  }
}

export default MyRoute
