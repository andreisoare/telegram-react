import React from 'react';

class Following extends React.Component {
  render() {
    return (
      <div>
        <h1>Following</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Following;
