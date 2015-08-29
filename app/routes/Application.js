import React from 'react';
import { Link } from 'react-router';

class Application extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <Link to="/">Public</Link> |
        <Link to="/dashboard">Dashboard</Link> |
        <Link to="/andreisoare">andreisoare</Link> |
        {this.props.children}
      </div>
    );
  }
}

export default Application;
