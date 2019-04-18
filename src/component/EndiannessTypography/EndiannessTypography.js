import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

function EndiannessTypography(props) {
  const { endianness } = props;
  const isBigEndian = (endianness.toLowerCase() === 'big');

  return (
    <Typography color="textPrimary" variant="h5">
      {isBigEndian ? 'Big' : 'Little'} Endian
    </Typography>
  );
}

EndiannessTypography.propTypes = {
  endianness: PropTypes.oneOf(['big', 'little']).isRequired,
};

export default EndiannessTypography;