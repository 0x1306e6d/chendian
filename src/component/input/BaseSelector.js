import React from 'react';

class BaseSelector extends React.Component {
  constructor(props) {
    super(props);

    this.select = this.select.bind(this);

    this.state = { base: 10 };
  }

  select(base) {
    if (base === 2 || base === 8 || base === 10 || base === 16) {
      this.setState({ base: base });
    }
  }

  render() {
    return (
      <div className="input-group-prepend">
        <button type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.state.base}
        </button>
        <div className="dropdown-menu">
          <button type="button" className="dropdown-item"
            onClick={() => this.select(2)}>
            Binary
          </button>
          <button type="button" className="dropdown-item"
            onClick={() => this.select(8)}>
            Octal
          </button>
          <button type="button" className="dropdown-item"
            onClick={() => this.select(10)}>
            Decimal
          </button>
          <button type="button" className="dropdown-item"
            onClick={() => this.select(16)}>
            Hexadecimal
          </button>
        </div>
      </div>
    );
  }
}

export default BaseSelector;
