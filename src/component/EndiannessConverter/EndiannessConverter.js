import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';

import ByteOrderTypography from '../ByteOrderTypography';
import EndiannessTypography from '../EndiannessTypography';

const EndiannessConverter = (ListItem) => {
  return class extends React.Component {
    render() {
      const { array, byteLength, endianness } = this.props;
      const isBigEndian = (endianness.toLowerCase() === 'big');

      let words = []
      for (let i = 0; i < array.length; i += byteLength) {
        let word = new Array(byteLength);
        word.fill(0);

        array.slice(i, i + byteLength).forEach((byte, index) => {
          if (isBigEndian) {
            word[index] = byte;
          } else {
            word[byteLength - index - 1] = byte;
          }
        });

        words.push(word);
      }

      return (
        <React.Fragment>
          <EndiannessTypography endianness={endianness} />
          <ByteOrderTypography
            byteLength={byteLength}
            endianness={endianness} />
          <List>
            {words.map((word, index) => (
              <ListItem key={index} array={word} byteLength={byteLength} />
            ))}
          </List>
        </React.Fragment>
      );
    }
  }
}

EndiannessConverter.propTypes = {
  array: PropTypes.array.isRequired,
  byteLength: PropTypes.oneOf([2, 4, 8]).isRequired,
  endianness: PropTypes.oneOf(['big', 'little']).isRequired,
};

export default EndiannessConverter;