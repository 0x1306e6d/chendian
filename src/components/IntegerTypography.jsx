import React from 'react';
import PropTypes from 'prop-types';

import Big from 'big.js';

import Typography from '@material-ui/core/Typography';

const powTable = {
  0: new Big(2).pow(0),
  1: new Big(2).pow(8),
  2: new Big(2).pow(16),
  3: new Big(2).pow(24),
  4: new Big(2).pow(32),
  5: new Big(2).pow(40),
  6: new Big(2).pow(48),
  7: new Big(2).pow(56),
  8: new Big(2).pow(64),
};

const signedThreshold = {
  2: new Big(2).pow(16 - 1),
  4: new Big(2).pow(32 - 1),
  8: new Big(2).pow(64 - 1),
};

const IntegerTypography = ({ array, byteLength, signed }) => {
  const readUnsignedInteger = () => array.reduce(
    (acc, current, index) => acc.plus(new Big(current).times(powTable[byteLength - index - 1])),
    new Big(0),
  );

  const readSignedInteger = () => {
    const unsigned = readUnsignedInteger();

    if (unsigned.gte(signedThreshold[byteLength])) {
      return unsigned.minus(powTable[byteLength]);
    }

    return unsigned;
  };

  const renderInteger = () => {
    if (signed) {
      return (
        <Typography variant="body1">
          {readSignedInteger().toString()}
        </Typography>
      );
    }

    return (
      <Typography variant="body1">
        {readUnsignedInteger().toString()}
      </Typography>
    );
  };

  return (
    <>
      <Typography variant="overline">
        {signed ? 'Signed' : 'Unsigned'}
      </Typography>
      {renderInteger()}
    </>
  );
};

IntegerTypography.propTypes = {
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
  byteLength: PropTypes.oneOf([2, 4, 8]).isRequired,
  signed: PropTypes.bool.isRequired,
};

export default IntegerTypography;
