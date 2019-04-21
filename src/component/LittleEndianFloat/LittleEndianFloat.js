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
  const { byteArray } = props;
  const wordSize = 4;

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
      <EndiannessTypography endianness="little" />
      <ByteOrderTypography byteLength={4} endianness="little" />
      <List>
        {wordArray.map((word, index) => (
          <ListItem key={index} divider>
            <Grid spacing={16} container>
              <Grid xs={12} item>
                <HexStringTypography array={word} />
              </Grid>
              <Grid xs={12} item>
                <FloatTypography array={word} byteLength={wordSize} />
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

LittleEndianFloat.propTypes = {
  byteArray: PropTypes.array.isRequired,
};

export default LittleEndianFloat;