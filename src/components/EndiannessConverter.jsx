/* eslint-disable prefer-destructuring */
import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ByteOrderTypography from './ByteOrderTypography';
import EndiannessTypography from './EndiannessTypography';

const convertAsBigEndian = (byteLength, array) => {
  const word = new Array(byteLength);
  word.fill(0);

  switch (byteLength) {
    case 2:
      word[0] = array[0];
      word[1] = array[1];
      break;
    case 4:
      word[0] = array[0];
      word[1] = array[1];
      word[2] = array[2];
      word[3] = array[3];
      break;
    case 8:
      word[0] = array[0];
      word[1] = array[1];
      word[2] = array[2];
      word[3] = array[3];
      word[4] = array[4];
      word[5] = array[5];
      word[6] = array[6];
      word[7] = array[7];
      break;
    default:
      break;
  }

  return word;
};

const convertAsMiddleBigEndian = (byteLength, array) => {
  const word = new Array(byteLength);
  word.fill(0);

  switch (byteLength) {
    case 2:
      word[0] = array[0];
      word[1] = array[1];
      break;
    case 4:
      word[0] = array[1];
      word[1] = array[0];
      word[2] = array[3];
      word[3] = array[2];
      break;
    case 8:
      word[0] = array[1];
      word[1] = array[0];
      word[2] = array[3];
      word[3] = array[2];
      word[4] = array[5];
      word[5] = array[4];
      word[6] = array[7];
      word[7] = array[6];
      break;
    default:
      break;
  }

  return word;
};

const convertAsMiddleLittleEndian = (byteLength, array) => {
  const word = new Array(byteLength);
  word.fill(0);

  switch (byteLength) {
    case 2:
      word[0] = array[0];
      word[1] = array[1];
      break;
    case 4:
      word[0] = array[2];
      word[1] = array[3];
      word[2] = array[0];
      word[3] = array[1];
      break;
    case 8:
      word[0] = array[6];
      word[1] = array[7];
      word[2] = array[4];
      word[3] = array[5];
      word[4] = array[2];
      word[5] = array[3];
      word[6] = array[1];
      word[7] = array[0];
      break;
    default:
      break;
  }

  return word;
};

const convertAsLittleEndian = (byteLength, array) => {
  const word = new Array(byteLength);
  word.fill(0);

  switch (byteLength) {
    case 2:
      word[0] = array[1];
      word[1] = array[0];
      break;
    case 4:
      word[0] = array[3];
      word[1] = array[2];
      word[2] = array[1];
      word[3] = array[0];
      break;
    case 8:
      word[0] = array[7];
      word[1] = array[6];
      word[2] = array[5];
      word[3] = array[4];
      word[4] = array[3];
      word[5] = array[2];
      word[6] = array[1];
      word[7] = array[0];
      break;
    default:
      break;
  }

  return word;
};

const EndiannessConverter = (TypeComponent) => {
  const WrappedEndiannessConverter = ({ array, byteLength, endianness }) => {
    const words = [];
    for (let i = 0; i < array.length; i += byteLength) {
      const word = new Array(byteLength);
      word.fill(0);

      array.slice(i, i + byteLength).forEach((byte, index) => {
        word[index] = byte;
      });

      switch (endianness) {
        case 'big':
          words.push(convertAsBigEndian(byteLength, word));
          break;
        case 'middleBig':
          words.push(convertAsMiddleBigEndian(byteLength, word));
          break;
        case 'middleLittle':
          words.push(convertAsMiddleLittleEndian(byteLength, word));
          break;
        case 'little':
          words.push(convertAsLittleEndian(byteLength, word));
          break;
        default:
          break;
      }
    }

    return (
      <>
        <EndiannessTypography endianness={endianness} />
        <ByteOrderTypography byteLength={byteLength} endianness={endianness} />
        <List>
          {words.map((word, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ListItem key={index} divider>
              <TypeComponent array={word} byteLength={byteLength} />
            </ListItem>
          ))}
        </List>
      </>
    );
  };

  WrappedEndiannessConverter.propTypes = {
    array: PropTypes.arrayOf(PropTypes.number).isRequired,
    byteLength: PropTypes.oneOf([2, 4, 8]).isRequired,
    endianness: PropTypes.oneOf(['big', 'middleBig', 'middleLittle', 'little']).isRequired,
  };

  return WrappedEndiannessConverter;
};

EndiannessConverter.propTypes = {
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
  byteLength: PropTypes.oneOf([2, 4, 8]).isRequired,
  endianness: PropTypes.oneOf(['big', 'middleBig', 'middleLittle', 'little']).isRequired,
};

export default EndiannessConverter;
