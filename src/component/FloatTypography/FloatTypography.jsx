import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

const endianTest = new Uint16Array(1);
const endianTestBuffer = new Uint8Array(endianTest.buffer);
endianTestBuffer[0] = 0xFF;
endianTestBuffer[1] = 0x00;
const isBigEndian = (endianTest[0] === 0x00FF);

class FloatTypography extends React.Component {
  constructor(props) {
    super(props);

    this.getFloatArray = this.getFloatArray.bind(this);
    this.readFloatForwards = this.readFloatForwards.bind(this);
    this.readFloatBackwards = this.readFloatBackwards.bind(this);
    this.readFloat = this.readFloat.bind(this);
  }

  getFloatArray() {
    const { byteLength } = this.props;

    if (byteLength === 4) {
      return new Float32Array(1);
    } else {
      return new Float64Array(1);
    }
  }

  readFloatForwards() {
    const { array, byteLength } = this.props;

    const floatArray = this.getFloatArray();
    const uint8Array = new Uint8Array(floatArray.buffer);
    for (let i = 0; i < byteLength; i++) {
      uint8Array[i] = array[i];
    }

    return floatArray[0];
  }

  readFloatBackwards() {
    const { array, byteLength } = this.props;

    const floatArray = this.getFloatArray();
    const uint8Array = new Uint8Array(floatArray.buffer);
    for (let i = 0; i < byteLength; i++) {
      uint8Array[byteLength - i - 1] = array[i];
    }

    return floatArray[0];
  }

  readFloat() {
    if (isBigEndian) {
      return this.readFloatBackwards();
    } else {
      return this.readFloatForwards();
    }
  }

  render() {
    return (
      <Typography variant="body1">
        {this.readFloat()}
      </Typography>
    );
  }
}

FloatTypography.propTypes = {
  array: PropTypes.array.isRequired,
  byteLength: PropTypes.oneOf([4, 8]).isRequired,
};

export default FloatTypography;