import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import HexList from '../hex/HexList';

class LittleEndianConverter extends React.Component {
  renderOrder() {
    switch (this.props.word) {
      case 2:
        return 'BA';
      case 4:
        return 'DC BA';
      case 8:
        return 'HG FE DC BA';
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
            Little Endian
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

LittleEndianConverter.propTypes = {
  word: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired
}

export default LittleEndianConverter;
