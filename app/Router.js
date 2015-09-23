import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()

React.render((
  <Router history={history}>
    <Route component={getRoute('Application')}>
      <Route component={getRoute('Public')}>
        <Redirect from="/" to="/login"/>
        <Route path="login" component={getRoute('Public/Login')}/>
        <Route path="signup" component={getRoute('Public/Signup')}/>
        <Route path="reset" component={getRoute('Public/ResetPassword')}/>
      </Route>
      <Route path="dashboard" component={getRoute('Dashboard')}/>
      <Route component={getRoute('User')}>
        <Redirect from=":userID" to="/:userID/posts"/>
        <Route path=":userID/posts" component={getRoute('User/Posts')}/>
        <Route path=":userID/following" component={getRoute('User/Following')}/>
        <Route path=":userID/followers" component={getRoute('User/Followers')}/>
      </Route>
    </Route>
  </Router>
), document.getElementsByTagName('body')[0]);


function getRoute(s) {
  class BaseRoute extends React.Component {
    render() { return (<div>{this.props.children}</div>) }
  }

  try {
    return require('app/routes/' + s);
  } catch(e) {
    return BaseRoute;
  }
}
