import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import { changeInput } from '../../action/input';

function validate(hexText) {
  return /^[a-fA-F0-9\s]*$/.test(hexText);
}

class HexStringInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = { error: false };
  }

  handleChange(event) {
    const { error } = this.state;
    const { value } = event.target;

    if (validate(value)) {
      let hexString = value;

      // remove all whitespaces
      hexString = hexString.replace(/\s/g, '');
      // convert to uppercase
      hexString = hexString.toUpperCase();

      if (error === true) {
        this.setState({ error: false });
      }
      this.props.change(hexString);
    } else {
      if (error === false) {
        this.setState({ error: true });
      }
    }
  }

  render() {
    const { error } = this.state;

    return (
      <TextField
        error={error}
        helperText={error && "please enter the correct hex string."}
        placeholder="please enter the hex string."
        variant="outlined"
        fullWidth
        multiline
        onChange={this.handleChange} />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  change: (input) => dispatch(changeInput(input)),
});

export default connect(null, mapDispatchToProps)(HexStringInput);