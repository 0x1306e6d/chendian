import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import ByteOrderTypography from '../ByteOrderTypography';
import EndiannessTypography from '../EndiannessTypography';
import HexStringTypography from '../HexStringTypography';

const endianTest = new Uint16Array(1);
const endianTestBuffer = new Uint8Array(endianTest.buffer);
endianTestBuffer[0] = 0xFF;
endianTestBuffer[1] = 0x00;
const isBigEndian = (endianTest[0] === 0x00FF);

function readDoubleForwards(numberArray) {
  const float64Array = new Float64Array(1);
  const uint8Array = new Uint8Array(float64Array.buffer);

  uint8Array[0] = numberArray[0];
  uint8Array[1] = numberArray[1];
  uint8Array[2] = numberArray[2];
  uint8Array[3] = numberArray[3];
  uint8Array[4] = numberArray[4];
  uint8Array[5] = numberArray[5];
  uint8Array[6] = numberArray[6];
  uint8Array[7] = numberArray[7];
  return float64Array[0];
}

function readDoubleBackwards(numberArray) {
  const float64Array = new Float64Array(1);
  const uint8Array = new Uint8Array(float64Array.buffer);

  uint8Array[7] = numberArray[0];
  uint8Array[6] = numberArray[1];
  uint8Array[5] = numberArray[2];
  uint8Array[4] = numberArray[3];
  uint8Array[3] = numberArray[4];
  uint8Array[2] = numberArray[5];
  uint8Array[1] = numberArray[6];
  uint8Array[0] = numberArray[7];
  return float64Array[0];
}

function BigEndianDouble(props) {
  const { byteArray } = props;
  const wordSize = 8;

  let wordArray = [];
  for (let i = 0; i < byteArray.length; i += wordSize) {
    let word = new Array(wordSize);
    word.fill(0);

    byteArray.slice(i, i + wordSize).forEach((byte, index) => {
      word[index] = byte;
    });

    wordArray.push(word);
  }

  return (
    <React.Fragment>
      <EndiannessTypography endianness="big" />
      <ByteOrderTypography byteLength={8} endianness="big" />
      <List>
        {wordArray.map((word, index) => (
          <ListItem key={index} divider>
            <Grid spacing={16} container>
              <Grid xs={12} item>
                <HexStringTypography array={word} />
              </Grid>
              <Grid xs={12} item>
                <Typography variant="body1">
                  {isBigEndian ? readDoubleBackwards(word) : readDoubleForwards(word)}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

BigEndianDouble.propTypes = {
  byteArray: PropTypes.array.isRequired,
};

export default BigEndianDouble;