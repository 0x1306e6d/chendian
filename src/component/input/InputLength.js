import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class InputLength extends React.Component {
  render() {
    return (
      <small className={classNames('float-right', 'text-muted')}>
        {this.props.value.length}
      </small>
    );
  }
}

InputLength.propTypes = {
  value: PropTypes.string.isRequired
};

export default InputLength;
