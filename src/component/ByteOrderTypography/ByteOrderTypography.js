import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

function ByteOrderTypography(props) {
  const { byteLength, endianness } = props;
  const isBigEndian = (endianness.toLowerCase() === 'big');

  let byteOrder = null;
  switch (byteLength) {
    case 2:
      if (isBigEndian) {
        byteOrder = 'A B';
      } else {
        byteOrder = 'B A';
      }
      break;
    case 4:
      if (isBigEndian) {
        byteOrder = 'A B C D';
      } else {
        byteOrder = 'D C B A';
      }
      break;
    case 8:
      if (isBigEndian) {
        byteOrder = 'A B C D E F G H';
      } else {
        byteOrder = 'H G F E D C B A';
      }
      break;
    default:
      break;
  }

  return (
    <Typography color="textSecondary" variant="h6">
      {byteOrder}
    </Typography>
  );
}

ByteOrderTypography.propTypes = {
  byteLength: PropTypes.oneOf([2, 4, 8]).isRequired,
  endianness: PropTypes.oneOf(['big', 'little']).isRequired,
};

export default ByteOrderTypography;