import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
  render() {
    var { userID } = this.props.params;

    return (
      <div>
        <h1>User {userID}</h1>
        <Link to={`${userID}/posts`}>Posts</Link> |
        <Link to={`${userID}/following`}>Following</Link> |
        <Link to={`${userID}/followers`}>Followers</Link>
        {this.props.children}
      </div>
    );
  }
}

export default User;
