import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import { changeInput } from '../action/input';

const validate = (hexText) => {
  return /^[a-fA-F0-9\s]*$/.test(hexText);
}

const HexStringInput = ({ change }) => {
  const [error, setError] = React.useState(false);

  const handleChange = (event) => {
    const { value } = event.target;

    if (validate(value)) {
      let hexString = value;

      // remove all whitespaces
      hexString = hexString.replace(/\s/g, '');
      // convert to uppercase
      hexString = hexString.toUpperCase();

      let byteArray = [];
      for (let i = 0; i < hexString.length; i += 2) {
        const hex = hexString.slice(i, i + 2);
        const byte = parseInt(hex, 16);
        byteArray.push(byte);
      }

      if (error === true) {
        setError(false);
      }
      change(byteArray);
    } else {
      if (error === false) {
        setError(true);
      }
    }
  };

  return (
    <TextField
      error={error}
      helperText={error && "please enter the correct hex string."}
      placeholder="please enter the hex string."
      variant="outlined"
      fullWidth
      multiline
      onChange={handleChange} />
  );
}

const mapDispatchToProps = (dispatch) => ({
  change: (input) => dispatch(changeInput(input)),
});

export default connect(null, mapDispatchToProps)(HexStringInput);