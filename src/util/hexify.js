function hexify(byteArray) {
  return byteArray.map((byte) => {
    return byte.toString(16).toUpperCase().padStart(2, '0');
  }).join(' ');
}

export default hexify;