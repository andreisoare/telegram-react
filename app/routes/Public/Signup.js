import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Signup;
