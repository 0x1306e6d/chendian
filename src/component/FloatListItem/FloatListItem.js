import React from 'react';
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

import FloatTypography from '../FloatTypography';
import HexStringTypography from '../HexStringTypography';

function FloatListItem(props) {
  const { array, byteLength } = props;

  return (
    <ListItem divider>
      <Grid spacing={16} container>
        <Grid xs={12} item>
          <HexStringTypography array={array} />
        </Grid>
        <Grid xs={12} item>
          <FloatTypography array={array} byteLength={byteLength} />
        </Grid>
      </Grid>
    </ListItem>
  );
}

FloatListItem.propTypes = {
  array: PropTypes.array.isRequired,
  byteLength: PropTypes.oneOf([4, 8]).isRequired,
};

export default FloatListItem;