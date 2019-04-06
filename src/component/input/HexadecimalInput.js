import React from 'react';
import classNames from 'classnames';

class HexadecimalInput extends React.Component {
  render() {
    return (
      <input
        type="text"
        className={classNames('form-control', 'px-3', 'py-5', this.props.className)}
        placeholder="input hexadecimal numbers" />
    );
  }
}

export default HexadecimalInput;
