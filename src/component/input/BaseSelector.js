import React from 'react';
import { connect } from 'react-redux';

import { selectBase } from '../../action/base';

class BaseSelector extends React.Component {
  render() {
    const { base, select } = this.props;

    return (
      <div className="input-group-prepend">
        <button type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {base}
        </button>
        <div className="dropdown-menu">
          <button type="button" className="dropdown-item"
            onClick={() => select(2)}>
            Binary
          </button>
          <button type="button" className="dropdown-item"
            onClick={() => select(8)}>
            Octal
          </button>
          <button type="button" className="dropdown-item"
            onClick={() => select(10)}>
            Decimal
          </button>
          <button type="button" className="dropdown-item"
            onClick={() => select(16)}>
            Hexadecimal
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  base: state.base
});

const mapDispatchToProps = (dispatch) => ({
  select: (base) => dispatch(selectBase(base))
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseSelector);
