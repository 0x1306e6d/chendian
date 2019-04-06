import React from 'react';
import classNames from 'classnames';

import 'bootstrap/dist/css/bootstrap.min.css';

class Container extends React.Component {
  render() {
    return (
      <div className={classNames('container', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;