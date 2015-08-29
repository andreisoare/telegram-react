import React from 'react';

class Followers extends React.Component {
  render() {
    return (
      <div>
        <h1>Followers</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Followers;
