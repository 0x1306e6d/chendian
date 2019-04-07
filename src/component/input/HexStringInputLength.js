import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class HexStringInputLength extends React.Component {
  render() {
    const { hexString } = this.props;

    if (hexString) {
      return (
        <small className={classNames('float-right', 'text-muted')}>
          {hexString.split(' ').length} bytes
        </small>
      );
    } else {
      return null;
    }
  }
}

HexStringInputLength.propTypes = {
  hexString: PropTypes.string.isRequired
};

export default HexStringInputLength;
