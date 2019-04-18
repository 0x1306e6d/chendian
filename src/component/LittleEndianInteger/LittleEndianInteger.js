import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import ByteOrderTypography from '../ByteOrderTypography';
import HexStringTypography from '../HexStringTypography';

import int from '../../util/int';
import uint from '../../util/uint';

function LittleEndianInteger(props) {
  const { byteArray, size } = props;
  const is64Bit = (size === 64);
  const wordSize = (size / 8);

  let wordArray = [];
  for (let i = 0; i < byteArray.length; i += wordSize) {
    let word = new Array(wordSize);

    word.fill(0);
    byteArray.slice(i, i + wordSize).forEach((byte, index) => {
      word[wordSize - index - 1] = byte;
    });
    wordArray.push(word);
  }

  return (
    <React.Fragment>
      <Typography color="textPrimary" variant="h5">
        Little Endian
      </Typography>
      <ByteOrderTypography byteLength={wordSize} endianness="little" />
      <List>
        {/* TODO(@ghkim3221): modularization */}
        {wordArray.map((word, index) => (
          <ListItem key={index} divider>
            <Grid spacing={16} container>
              <Grid xs={12} item>
                <HexStringTypography array={word} variant="subtitle1" />
              </Grid>
              <Grid xs={is64Bit ? 12 : 6} sm={is64Bit ? 6 : false} item>
                <Typography variant="overline">
                  Signed
                  </Typography>
                <Typography variant="body1">
                  {int(word, size)}
                </Typography>
              </Grid>
              <Grid xs={is64Bit ? 12 : 6} sm={is64Bit ? 6 : false} item>
                <Typography variant="overline">
                  Unsigned
                  </Typography>
                <Typography variant="body1">
                  {uint(word, size)}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

LittleEndianInteger.propTypes = {
  byteArray: PropTypes.array.isRequired,
  size: PropTypes.oneOf([16, 32, 64]).isRequired,
};

export default LittleEndianInteger;