import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Login;
