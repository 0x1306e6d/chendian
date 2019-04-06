import React from 'react';
import classNames from 'classnames';

class DecimalInput extends React.Component {
  render() {
    return (
      <input type="number"
        className={classNames('form-control', 'px-3', 'py-5', this.props.className)}
        placeholder="input decimal numbers" />
    );
  }
}

export default DecimalInput;
