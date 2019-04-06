import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { changeValue } from '../../action/value';

const asDecimal = (value) => {
  if (value) {
    return Number(value).toString(10);
  } else {
    return '';
  }
};

class DecimalInput extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;

    if (/[0-9]*/.test(value)) {
      const decimalValue = parseInt(value, 10);
      this.props.change(decimalValue);
    }
  }

  render() {
    return (
      <input
        type="number"
        className={classNames('form-control', 'px-3', 'py-5', this.props.className)}
        value={asDecimal(this.props.value)}
        placeholder="input decimal numbers"
        onChange={this.onChange} />
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value
});

const mapDispatchToProps = (dispatch) => ({
  change: (value) => dispatch(changeValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(DecimalInput);
