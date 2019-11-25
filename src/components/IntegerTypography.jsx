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

class IntegerTypography extends React.Component {
  constructor(props) {
    super(props);

    this.readUnsignedInteger = this.readUnsignedInteger.bind(this);
    this.readSignedInteger = this.readSignedInteger.bind(this);
    this.renderInteger = this.renderInteger.bind(this);
  }

  readUnsignedInteger() {
    const { array, byteLength } = this.props;

    return array.reduce(
      (acc, current, index) => {
        return acc.plus(
          new Big(current).times(powTable[byteLength - index - 1])
        );
      },
      new Big(0)
    );
  }

  readSignedInteger() {
    const { byteLength } = this.props;
    const unsigned = this.readUnsignedInteger();

    if (unsigned.gte(signedThreshold[byteLength])) {
      return unsigned.minus(powTable[byteLength]);
    } else {
      return unsigned;
    }
  }

  renderInteger() {
    const { signed } = this.props;

    if (signed) {
      return (
        <Typography variant="body1">
          {this.readSignedInteger().toString()}
        </Typography>
      );
    } else {
      return (
        <Typography variant="body1">
          {this.readUnsignedInteger().toString()}
        </Typography>
      );
    }
  }

  render() {
    const { signed } = this.props;

    return (
      <React.Fragment>
        <Typography variant="overline">
          {signed ? 'Signed' : 'Unsigned'}
        </Typography>
        {this.renderInteger()}
      </React.Fragment>
    );
  }
}

IntegerTypography.propTypes = {
  array: PropTypes.array.isRequired,
  byteLength: PropTypes.oneOf([2, 4, 8]).isRequired,
  signed: PropTypes.bool.isRequired,
};

export default IntegerTypography;