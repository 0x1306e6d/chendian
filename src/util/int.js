import Big from 'big.js';

import uint from './uint';

const int16MSB = new Big(2).pow(15);
const int32MSB = new Big(2).pow(31);
const int64MSB = new Big(2).pow(63);

function int16(byteArray) {
  const unsigned = new Big(uint(byteArray, 16));

  if (unsigned.gte(int16MSB)) {
    return unsigned.minus(new Big(2).pow(16)).toString();
  } else {
    return unsigned.toString();
  }
}

function int32(byteArray) {
  const unsigned = new Big(uint(byteArray, 32));

  if (unsigned.gte(int32MSB)) {
    return unsigned.minus(new Big(2).pow(32)).toString();
  } else {
    return unsigned.toString();
  }
}

function int64(byteArray) {
  const unsigned = new Big(uint(byteArray, 64));

  if (unsigned.gte(int64MSB)) {
    return unsigned.minus(new Big(2).pow(64)).toString();
  } else {
    return unsigned.toString();
  }
}

function int(byteArray, bitLength) {
  if (bitLength === 16) {
    return int16(byteArray);
  }
  if (bitLength === 32) {
    return int32(byteArray);
  }
  if (bitLength === 64) {
    return int64(byteArray);
  }
}

export default int;