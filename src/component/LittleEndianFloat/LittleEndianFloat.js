import React from 'react';

import Typography from '@material-ui/core/Typography';

function LittleEndianFloat() {
  return (
    <React.Fragment>
      <Typography color="textPrimary" variant="h5">
        Little Endian
      </Typography>
      <Typography color="textSecondary" variant="h6">
        CD AB
      </Typography>
    </React.Fragment>
  );
}

export default LittleEndianFloat;