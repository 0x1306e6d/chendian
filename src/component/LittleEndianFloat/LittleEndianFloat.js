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

function readFloatForwards(numberArray) {
  const float32Array = new Float32Array(1);
  const uint8Array = new Uint8Array(float32Array.buffer);

  uint8Array[0] = numberArray[0];
  uint8Array[1] = numberArray[1];
  uint8Array[2] = numberArray[2];
  uint8Array[3] = numberArray[3];
  return float32Array[0];
}

function readFloatBackwards(numberArray) {
  const float32Array = new Float32Array(1);
  const uint8Array = new Uint8Array(float32Array.buffer);

  uint8Array[3] = numberArray[0];
  uint8Array[2] = numberArray[1];
  uint8Array[1] = numberArray[2];
  uint8Array[0] = numberArray[3];
  return float32Array[0];
}

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
                <HexStringTypography array={word} variant="subtitle1" />
              </Grid>
              <Grid xs={12} item>
                <Typography variant="body1">
                  {isBigEndian ? readFloatBackwards(word) : readFloatForwards(word)}
                </Typography>
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