import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

const hexify = (b) => {
  return b
    .toString(16)
    .toUpperCase()
    .padStart(2, '0');
};

const HexStringTypography = ({ array }) => (
  <Typography variant="subtitle1">{array.map(hexify).join(' ')}</Typography>
);

HexStringTypography.propTypes = {
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default HexStringTypography;
