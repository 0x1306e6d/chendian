import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

function BigEndianByteOrderTypography(byteLength) {
  switch (byteLength) {
    case 2:
      return (
        <Typography color="textSecondary" variant="h6">
          A B
        </Typography>
      );
    case 4:
      return (
        <Typography color="textSecondary" variant="h6">
          A B C D
        </Typography>
      );
    case 8:
      return (
        <Typography color="textSecondary" variant="h6">
          A B C D E F G H
        </Typography>
      );
    default:
      return (
        <Typography color="textSecondary" variant="h6">
          Unknown
        </Typography>
      );
  }
}

function MiddleBigEndianByteOrderTypography(byteLength) {
  switch (byteLength) {
    case 2:
      return (
        <Typography color="textSecondary" variant="h6">
          A B
        </Typography>
      );
    case 4:
      return (
        <Typography color="textSecondary" variant="h6">
          B A D C
        </Typography>
      );
    case 8:
      return (
        <Typography color="textSecondary" variant="h6">
          B A D C F E H G
        </Typography>
      );
    default:
      return (
        <Typography color="textSecondary" variant="h6">
          Unknown
        </Typography>
      );
  }
}

function MiddleLittleEndianByteOrderTypography(byteLength) {
  switch (byteLength) {
    case 2:
      return (
        <Typography color="textSecondary" variant="h6">
          A B
        </Typography>
      );
    case 4:
      return (
        <Typography color="textSecondary" variant="h6">
          C D A B
        </Typography>
      );
    case 8:
      return (
        <Typography color="textSecondary" variant="h6">
          G H E F C D A B
        </Typography>
      );
    default:
      return (
        <Typography color="textSecondary" variant="h6">
          Unknown
        </Typography>
      );
  }
}

function LittleEndianByteOrderTypography(byteLength) {
  switch (byteLength) {
    case 2:
      return (
        <Typography color="textSecondary" variant="h6">
          B A
        </Typography>
      );
    case 4:
      return (
        <Typography color="textSecondary" variant="h6">
          D C B A
        </Typography>
      );
    case 8:
      return (
        <Typography color="textSecondary" variant="h6">
          H G F E D C B A
        </Typography>
      );
    default:
      return (
        <Typography color="textSecondary" variant="h6">
          Unknown
        </Typography>
      );
  }
}

function ByteOrderTypography(props) {
  const { byteLength, endianness } = props;

  switch (endianness) {
    case 'big':
      return BigEndianByteOrderTypography(byteLength);
    case 'middleBig':
      return MiddleBigEndianByteOrderTypography(byteLength);
    case 'middleLittle':
      return MiddleLittleEndianByteOrderTypography(byteLength);
    case 'little':
      return LittleEndianByteOrderTypography(byteLength);
    default:
      return (
        <Typography color="textSecondary" variant="h6">
          Unknown
        </Typography>
      );
  }
}

ByteOrderTypography.propTypes = {
  byteLength: PropTypes.oneOf([2, 4, 8]).isRequired,
  endianness: PropTypes.oneOf(['big', 'middleBig', 'middleLittle', 'little']).isRequired,
};

export default ByteOrderTypography;