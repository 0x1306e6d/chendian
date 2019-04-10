import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

function EndianConverter(props) {
  const { bigEndian, littleEndian } = props;

  return (
    <Grid spacing={16} container>
      <Grid xs={12} lg={6} item>
        {bigEndian}
      </Grid>
      <Grid xs={12} lg={6} item>
        {littleEndian}
      </Grid>
    </Grid>
  );
}

EndianConverter.propTypes = {
  bigEndian: PropTypes.element.isRequired,
  littleEndian: PropTypes.element.isRequired,
};

export default EndianConverter;