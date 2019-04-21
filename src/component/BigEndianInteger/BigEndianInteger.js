import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ByteOrderTypography from '../ByteOrderTypography';
import EndiannessTypography from '../EndiannessTypography';
import HexStringTypography from '../HexStringTypography';
import IntegerTypography from '../IntegerTypography';

function BigEndianInteger(props) {
  const { byteArray, size } = props;
  const is64Bit = (size === 64);
  const wordSize = (size / 8);

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
      <ByteOrderTypography byteLength={wordSize} endianness="big" />
      <List>
        {/* TODO(@ghkim3221): modularization */}
        {wordArray.map((word, index) => (
          <ListItem key={index} divider>
            <Grid spacing={16} container>
              <Grid xs={12} item>
                <HexStringTypography array={word} />
              </Grid>
              <Grid xs={is64Bit ? 12 : 6} sm={is64Bit ? 6 : false} item>
                <IntegerTypography
                  array={word}
                  byteLength={size / 8}
                  signed={true} />
              </Grid>
              <Grid xs={is64Bit ? 12 : 6} sm={is64Bit ? 6 : false} item>
                <IntegerTypography
                  array={word}
                  byteLength={size / 8}
                  signed={false} />
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

BigEndianInteger.propTypes = {
  byteArray: PropTypes.array.isRequired,
  size: PropTypes.oneOf([16, 32, 64]).isRequired,
};

export default BigEndianInteger;