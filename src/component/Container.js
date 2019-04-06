import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default Container;
