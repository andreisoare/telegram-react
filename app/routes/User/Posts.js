import React from 'react';

class Posts extends React.Component {
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Posts;
