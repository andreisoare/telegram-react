import React from 'react';

class ResetPassword extends React.Component {
  render() {
    return (
      <div>
        <h1>Reset</h1>
        {this.props.children}
      </div>
    );
  }
}

export default ResetPassword;
