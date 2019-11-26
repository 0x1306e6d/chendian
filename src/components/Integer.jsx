import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import HexStringTypography from './HexStringTypography';
import IntegerTypography from './IntegerTypography';

const Integer = ({ array, byteLength }) => {
  const is64Bit = (byteLength === 8);

  return (
    <Grid spacing={16} container>
      <Grid xs={12} item>
        <HexStringTypography array={array} />
      </Grid>
      <Grid xs={is64Bit ? 12 : 6} sm={is64Bit ? 6 : false} item>
        <IntegerTypography
          array={array}
          byteLength={byteLength}
          signed={true} />
      </Grid>
      <Grid xs={is64Bit ? 12 : 6} sm={is64Bit ? 6 : false} item>
        <IntegerTypography
          array={array}
          byteLength={byteLength}
          signed={false} />
      </Grid>
    </Grid>
  );
}

Integer.propTypes = {
  array: PropTypes.array.isRequired,
  byteLength: PropTypes.oneOf([2, 4, 8]).isRequired,
};

export default Integer;