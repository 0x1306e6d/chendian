import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ByteOrderTypography from '../ByteOrderTypography';
import EndiannessTypography from '../EndiannessTypography';
import FloatTypography from '../FloatTypography';
import HexStringTypography from '../HexStringTypography';

function LittleEndianFloat(props) {
  const { array, byteLength } = props;

  let wordArray = [];
  for (let i = 0; i < array.length; i += byteLength) {
    let word = new Array(byteLength);
    word.fill(0);

    array.slice(i, i + byteLength).forEach((byte, index) => {
      word[byteLength - index - 1] = byte;
    });

    wordArray.push(word);
  }

  return (
    <React.Fragment>
      <EndiannessTypography endianness="little" />
      <ByteOrderTypography byteLength={byteLength} endianness="little" />
      <List>
        {wordArray.map((word, index) => (
          <ListItem key={index} divider>
            <Grid spacing={16} container>
              <Grid xs={12} item>
                <HexStringTypography array={word} />
              </Grid>
              <Grid xs={12} item>
                <FloatTypography array={word} byteLength={byteLength} />
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

LittleEndianFloat.propTypes = {
  array: PropTypes.array.isRequired,
  byteLength: PropTypes.oneOf([4, 8]).isRequired,
};

export default LittleEndianFloat;