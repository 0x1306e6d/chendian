import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import HexListItem from './HexListItem';

class HexList extends React.Component {
  render() {
    const { word, hexList } = this.props;

    return (
      <ul className={classNames('list-group', 'list-group-flush')}>
        {hexList.map((hex, index) => {
          return (
            <HexListItem
              key={`${word}-${index}`}
              index={index}
              hex={hex} />
          );
        })}
      </ul>
    );
  }
}

HexList.propTypes = {
  word: PropTypes.number.isRequired,
  hexList: PropTypes.array.isRequired
};

export default HexList;
