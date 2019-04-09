import React from 'react';

import Typography from '@material-ui/core/Typography';

function LittleEndianDouble() {
  return (
    <React.Fragment>
      <Typography color="textPrimary" variant="h5">
        Little Endian
      </Typography>
      <Typography color="textSecondary" variant="h6">
        GH EF CD AB
      </Typography>
    </React.Fragment>
  );
}

export default LittleEndianDouble;