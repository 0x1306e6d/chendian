import React from 'react';

import Typography from '@material-ui/core/Typography';

function BigEndianFloat() {
  return (
    <React.Fragment>
      <Typography color="textPrimary" variant="h5">
        Big Endian
      </Typography>
      <Typography color="textSecondary" variant="h6">
        AB CD
      </Typography>
    </React.Fragment>
  );
}

export default BigEndianFloat;