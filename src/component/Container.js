import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Container extends React.Component {
  render() {
    const { fluid } = this.props;
    const container = fluid ? 'container-fluid' : 'container';

    return (
      <div className={classNames(container, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool.isRequired
};

Container.defaultProps = {
  fluid: false
}

export default Container;
