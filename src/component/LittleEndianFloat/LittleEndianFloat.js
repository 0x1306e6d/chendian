import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import hexify from '../../util/hexify';

function LittleEndianFloat(props) {
  const { byteArray } = props;
  const wordSize = 4;

  const float32Array = new Float32Array(Math.ceil(byteArray.length / wordSize));
  const uint8Array = new Uint8Array(float32Array.buffer);

  let wordArray = [];
  for (let i = 0; i < byteArray.length; i += wordSize) {
    let word = new Array(wordSize);
    word.fill(0);

    byteArray.slice(i, i + wordSize).forEach((byte, index) => {
      word[wordSize - index - 1] = byte;
    });
    word.forEach((byte, index) => {
      uint8Array[i + index] = byte;
    });

    wordArray.push(word);
  }

  return (
    <React.Fragment>
      <Typography color="textPrimary" variant="h5">
        Little Endian
      </Typography>
      <Typography color="textSecondary" variant="h6">
        CD AB
      </Typography>
      <List>
        {wordArray.map((word, index) => (
          <ListItem key={index} divider>
            <Grid spacing={16} container>
              <Grid xs={12} item>
                <Typography variant="subtitle1">
                  {hexify(word)}
                </Typography>
              </Grid>
              <Grid xs={12} item>
                <Typography variant="body1">
                  {float32Array[index]}
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