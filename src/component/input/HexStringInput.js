import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { changeInput } from '../../action/input';

import HexStringInputLength from './HexStringInputLength';

function validate(hexString) {
  return /^[a-fA-F0-9\s]*$/.test(hexString);
}

class HexStringInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    if (!validate(value)) {
      return;
    }

    let hexString = value;
    // remove all whitespaces
    hexString = hexString.replace(/\s/g, '');
    // convert to uppercase
    hexString = hexString.toUpperCase();

    // make hex array
    let hexArray = [];
    for (let i = 0; i < hexString.length; i += 2) {
      const hex = hexString.substring(i, i + 2);
      hexArray.push(hex);
    }

    if (hexArray.length > 0) {
      // add whitespaces
      hexString = hexArray.reduce((accumulator, currentValue) => {
        return accumulator.concat(' ').concat(currentValue);
      });
    } else {
      hexString = '';
    }

    this.props.change(hexString);
  }

  render() {
    const { input } = this.props;

    return (
      <div>
        <input
          className={classNames('form-control', 'px-3', 'py-5')}
          type="text"
          value={input}
          placeholder="input hex string"
          onChange={this.handleChange} />
        <HexStringInputLength hexString={input} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  input: state.input
});

const mapDispatchToProps = (dispatch) => ({
  change: (input) => dispatch(changeInput(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(HexStringInput);
