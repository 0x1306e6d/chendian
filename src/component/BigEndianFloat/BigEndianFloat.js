import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';

import ByteOrderTypography from '../ByteOrderTypography';
import EndiannessTypography from '../EndiannessTypography';
import FloatListItem from '../FloatListItem';

function BigEndianFloat(props) {
  const { array, byteLength } = props;

  let wordArray = [];
  for (let i = 0; i < array.length; i += byteLength) {
    let word = new Array(byteLength);
    word.fill(0);

    array.slice(i, i + byteLength).forEach((byte, index) => {
      word[index] = byte;
    });

    wordArray.push(word);
  }

  return (
    <React.Fragment>
      <EndiannessTypography endianness="big" />
      <ByteOrderTypography byteLength={byteLength} endianness="big" />
      <List>
        {wordArray.map((word, index) => (
          <FloatListItem key={index} array={word} byteLength={byteLength} />
        ))}
      </List>
    </React.Fragment>
  );
}

BigEndianFloat.propTypes = {
  array: PropTypes.array.isRequired,
  byteLength: PropTypes.oneOf([4, 8]).isRequired,
};

export default BigEndianFloat;