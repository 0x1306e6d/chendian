import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationBrand extends React.Component {
  render() {
    return (
      <a className="navbar-brand" href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}

NavigationBrand.propTypes = {
  href: PropTypes.string.isRequired,
};

export default NavigationBrand;
