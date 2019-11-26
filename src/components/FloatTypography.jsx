import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

const endianTest = new Uint16Array(1);
const endianTestBuffer = new Uint8Array(endianTest.buffer);
endianTestBuffer[0] = 0xFF;
endianTestBuffer[1] = 0x00;
const isBigEndian = (endianTest[0] === 0x00FF);

const FloatTypography = ({ array, byteLength }) => {
  const getFloatArray = () => {
    if (byteLength === 4) {
      return new Float32Array(1);
    } else {
      return new Float64Array(1);
    }
  };

  const readFloatForwards = () => {
    const floatArray = getFloatArray();
    const uint8Array = new Uint8Array(floatArray.buffer);
    for (let i = 0; i < byteLength; i++) {
      uint8Array[i] = array[i];
    }

    return floatArray[0];
  }

  const readFloatBackwards = () => {
    const floatArray = getFloatArray();
    const uint8Array = new Uint8Array(floatArray.buffer);
    for (let i = 0; i < byteLength; i++) {
      uint8Array[byteLength - i - 1] = array[i];
    }

    return floatArray[0];
  }

  const readFloat = () => {
    if (isBigEndian) {
      return readFloatBackwards();
    } else {
      return readFloatForwards();
    }
  }

  return (
    <Typography variant="body1">
      {readFloat()}
    </Typography>
  );
}

FloatTypography.propTypes = {
  array: PropTypes.array.isRequired,
  byteLength: PropTypes.oneOf([4, 8]).isRequired,
};

export default FloatTypography;