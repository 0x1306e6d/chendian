import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

const endianTest = new Uint16Array(1);
const endianTestBuffer = new Uint8Array(endianTest.buffer);
endianTestBuffer[0] = 0xff;
endianTestBuffer[1] = 0x00;
const isBigEndian = endianTest[0] === 0x00ff;

const FloatTypography = ({ array, byteLength }) => {
  const getFloatArray = () => {
    if (byteLength === 4) {
      return new Float32Array(1);
    }

    return new Float64Array(1);
  };

  const readFloatForwards = () => {
    const floatArray = getFloatArray();
    const uint8Array = new Uint8Array(floatArray.buffer);
    for (let i = 0; i < byteLength; i += 1) {
      uint8Array[i] = array[i];
    }

    return floatArray[0];
  };

  const readFloatBackwards = () => {
    const floatArray = getFloatArray();
    const uint8Array = new Uint8Array(floatArray.buffer);
    for (let i = 0; i < byteLength; i += 1) {
      uint8Array[byteLength - i - 1] = array[i];
    }

    return floatArray[0];
  };

  const readFloat = () => {
    if (isBigEndian) {
      return readFloatBackwards();
    }

    return readFloatForwards();
  };

  const float = readFloat();
  if (Number.isNaN(float)) {
    return <Typography variant="body1">Not A Number</Typography>;
  }

  return <Typography variant="body1">{float}</Typography>;
};

FloatTypography.propTypes = {
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
  byteLength: PropTypes.oneOf([4, 8]).isRequired,
};

export default FloatTypography;
