import Big from 'big.js';

function uint16(byteArray) {
  return new Big(byteArray[0]).times(new Big(2).pow(8))
    .plus(new Big(byteArray[1]))
    .toString();
}

function uint32(byteArray) {
  return new Big(byteArray[0]).times(new Big(2).pow(24))
    .plus(new Big(byteArray[1]).times(new Big(2).pow(16)))
    .plus(new Big(byteArray[2]).times(new Big(2).pow(8)))
    .plus(new Big(byteArray[3]))
    .toString();
}

function uint64(byteArray) {
  return new Big(byteArray[0]).times(new Big(2).pow(56))
    .plus(new Big(byteArray[1]).times(new Big(2).pow(48)))
    .plus(new Big(byteArray[2]).times(new Big(2).pow(40)))
    .plus(new Big(byteArray[3]).times(new Big(2).pow(32)))
    .plus(new Big(byteArray[4]).times(new Big(2).pow(24)))
    .plus(new Big(byteArray[5]).times(new Big(2).pow(16)))
    .plus(new Big(byteArray[6]).times(new Big(2).pow(8)))
    .plus(new Big(byteArray[7]))
    .toString();
}

function uint(byteArray, bitLength) {
  if (bitLength === 16) {
    return uint16(byteArray);
  }
  if (bitLength === 32) {
    return uint32(byteArray);
  }
  if (bitLength === 64) {
    return uint64(byteArray);
  }
}

export default uint;