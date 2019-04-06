import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationMenuItem extends React.Component {
  render() {
    return (
      <a className="nav-item nav-link" href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}

NavigationMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
};

export default NavigationMenuItem;
