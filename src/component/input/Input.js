import React from 'react';
import classNames from 'classnames';

class Input extends React.Component {
  render() {
    return (
      <div className={classNames('input-group', this.props.className)}>
        <div className="input-group-prepend">
          <button type="button"
            className="btn btn-outline-secondary dropdown-toggle"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            16
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button">2</button>
            <button className="dropdown-item" type="button">8</button>
            <button className="dropdown-item" type="button">10</button>
            <button className="dropdown-item" type="button">16</button>
          </div>
        </div>
        <input type="text" className="form-control px-3 py-5" />
      </div>
    );
  }
}

export default Input;
