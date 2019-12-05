import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import FloatTypography from './FloatTypography';
import HexStringTypography from './HexStringTypography';

const Float = ({ array, byteLength }) => (
  <Grid spacing={2} container>
    <Grid xs={12} item>
      <HexStringTypography array={array} />
    </Grid>
    <Grid xs={12} item>
      <FloatTypography array={array} byteLength={byteLength} />
    </Grid>
  </Grid>
);

Float.propTypes = {
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
  byteLength: PropTypes.oneOf([4, 8]).isRequired,
};

export default Float;
