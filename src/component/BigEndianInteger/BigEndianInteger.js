import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';

import ByteOrderTypography from '../ByteOrderTypography';
import EndiannessTypography from '../EndiannessTypography';
import IntegerListItem from '../IntegerListItem';

function BigEndianInteger(props) {
  const { byteArray, size } = props;
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
        {wordArray.map((word, index) => (
          <IntegerListItem key={index} array={word} byteLength={wordSize} />
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