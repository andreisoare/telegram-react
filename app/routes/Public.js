import React from 'react';
import { Link } from 'react-router';

class Public extends React.Component {
  render() {
    return (
      <div>
        <h1>Public</h1>
        <Link to="/login">Login</Link> |
        <Link to="/signup">Signup</Link> |
        <Link to="/reset">Reset</Link> |
        {this.props.children}
      </div>
    );
  }
}

export default Public;
