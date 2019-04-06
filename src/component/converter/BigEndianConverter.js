import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class BigEndianConverter extends React.Component {
  renderOrder() {
    switch (this.props.word) {
      case 2:
        return 'AB';
      case 4:
        return 'AB CD';
      case 8:
        return 'AB CD EF GH';
      default:
        return null;
    }
  }

  render() {
    return (
      <div className={classNames('card')}>
        <div className={classNames('card-body')}>
          <h5 className={classNames('card-title')}>
            Big Endian
          </h5>
          <h6 className={classNames('card-subtitle', 'text-muted', 'mb-3')}>
            {this.renderOrder()}
          </h6>
          <p className={classNames('card-text')}>
            {this.props.value}
          </p>
        </div>
      </div>
    );
  }
}

BigEndianConverter.propTypes = {
  word: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired
}

export default BigEndianConverter;
