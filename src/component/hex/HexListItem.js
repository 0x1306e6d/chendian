import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class HexListItem extends React.Component {
  render() {
    const { index, hex } = this.props;

    return (
      <li className={classNames('list-group-item')}>
        <div className={classNames('d-flex', 'w-100', 'justify-content-between')}>
          <h5 className={classNames('text-dark')}>{`#${index}`}</h5>
          <p className={classNames('text-muted')}>{hex}</p>
        </div>
        <div className={classNames('row')}>
          <div className={classNames('col-6')}>
            <h6>Signed</h6>
            <p>{Number.parseInt(hex, 16).toLocaleString()}</p>
          </div>
          <div className={classNames('col-6')}>
            <h6>Unsigned</h6>
            <p>{Number.parseInt(hex, 16).toLocaleString()}</p>
          </div>
        </div>
      </li>
    );
  }
}

HexListItem.propTypes = {
  index: PropTypes.number.isRequired,
  hex: PropTypes.array.isRequired
};

export default HexListItem;
