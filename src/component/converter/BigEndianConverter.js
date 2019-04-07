import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import HexList from '../hex/HexList';

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
    const { word, value } = this.props;

    let hexList = [];
    for (let i = 0; i < value.length; i += word) {
      hexList.push(value.slice(i, i + word));
    }

    return (
      <div className={classNames('card')}>
        <div className={classNames('card-body')}>
          <h5 className={classNames('card-title')}>
            Big Endian
          </h5>
          <h6 className={classNames('card-subtitle', 'text-muted', 'mb-3')}>
            {this.renderOrder()}
          </h6>
          <HexList word={word} hexList={hexList} />
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
