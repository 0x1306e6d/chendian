import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { changeValue } from '../../action/value';

import InputLength from './InputLength';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;

    if (/^[a-fA-F0-9]*$/.test(value)) {
      this.props.change(value);
    }
  }

  render() {
    const { value } = this.props;
    return (
      <div>
        <input
          className={classNames('form-control', 'px-3', 'py-5')}
          type="text"
          value={value}
          placeholder="input hex string"
          onChange={this.onChange} />
        <InputLength value={value} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value
});

const mapDispatchToProps = (dispatch) => ({
  change: (value) => dispatch(changeValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
