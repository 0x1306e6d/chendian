import React from 'react';

import Typography from '@material-ui/core/Typography';

function BigEndianDouble() {
  return (
    <React.Fragment>
      <Typography color="textPrimary" variant="h5">
        Big Endian
      </Typography>
      <Typography color="textSecondary" variant="h6">
        AB CD EF GH
      </Typography>
    </React.Fragment>
  );
}

export default BigEndianDouble;