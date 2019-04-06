import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import BaseSelector from './BaseSelector';
import DecimalInput from './DecimalInput';
import HexadecimalInput from './HexadecimalInput';
import InputPreview from './InputPreview';
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
      <div className="row">
        <div className="col-12">
          <div className={classNames('input-group', this.props.className)}>
            <BaseSelector />
            {this.renderInput()}
          </div>
        </div>
        <div className="col-12">
          <InputPreview value={this.props.value} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  base: state.base,
  value: state.value
});

export default connect(mapStateToProps)(Input);
