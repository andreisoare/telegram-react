import React from 'react';
import { history } from 'react-router/lib/BrowserHistory';
import { Router, Route, Redirect } from 'react-router';

function getRoute(s) {
  return require('app/routes/' + s);
}

React.render((
  <Router history={history}>
    <Route component={getRoute('Application')}>
      <Route component={getRoute('Public')}>
        <Redirect from="/" to="login"/>
        <Route path="login" component={getRoute('Public/Login')}/>
        <Route path="signup" component={getRoute('Public/Signup')}/>
        <Route path="reset" component={getRoute('Public/ResetPassword')}/>
      </Route>
      <Route path="dashboard" component={getRoute('Dashboard')}/>
      <Route component={getRoute('User')}>
        <Redirect from=":userID" to=":userID/posts"/>
        <Route path=":userID/posts" component={getRoute('User/Posts')}/>
        <Route path=":userID/following" component={getRoute('User/Following')}/>
        <Route path=":userID/followers" component={getRoute('User/Followers')}/>
      </Route>
    </Route>
  </Router>
), document.getElementsByTagName('body')[0]);
