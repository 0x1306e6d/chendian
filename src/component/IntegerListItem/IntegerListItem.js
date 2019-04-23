import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

import HexStringTypography from '../HexStringTypography';
import IntegerTypography from '../IntegerTypography';

function IntegerListItem(props) {
  const { array, byteLength } = props;
  const is64Bit = (byteLength === 8);

  return (
    <ListItem divider>
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
    </ListItem>
  );
}

IntegerListItem.propTypes = {
  array: PropTypes.array.isRequired,
  byteLength: PropTypes.oneOf([2, 4, 8]).isRequired,
};

export default IntegerListItem;