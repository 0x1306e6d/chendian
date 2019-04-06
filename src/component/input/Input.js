import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import BaseSelector from './BaseSelector';
import DecimalInput from './DecimalInput';
import HexadecimalInput from './HexadecimalInput';
import OctalInput from './OctalInput';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.renderInput = this.renderInput.bind(this);
  }

  renderInput() {
    switch (this.props.base) {
      case 8:
        return <OctalInput />
      case 10:
        return <DecimalInput />
      case 16:
        return <HexadecimalInput />
      default:
        return <DecimalInput />
    }
  }

  render() {
    return (
      <div className={classNames('input-group', this.props.className)}>
        <BaseSelector />
        {this.renderInput()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  base: state.base
});

export default connect(mapStateToProps)(Input);
