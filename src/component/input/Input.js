import React from 'react';
import classNames from 'classnames';

import BaseSelector from './BaseSelector';

class Input extends React.Component {
  render() {
    return (
      <div className={classNames('input-group', this.props.className)}>
        <BaseSelector />
        <input type="text" className="form-control px-3 py-5" />
      </div>
    );
  }
}

export default Input;
