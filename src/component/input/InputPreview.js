import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class InputPreview extends React.Component {
  render() {
    const { value } = this.props;

    if (Number.isNaN(value)) {
      return null;
    } else {
      return (
        <small className={classNames('float-right', 'text-muted')}>
          {value.toLocaleString()}
        </small>
      );
    }
  }
}

InputPreview.propTypes = {
  value: PropTypes.number
};

export default InputPreview;
