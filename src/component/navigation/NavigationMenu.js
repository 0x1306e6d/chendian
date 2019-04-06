import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationMenu extends React.Component {
  render() {
    return (
      <div className="navbar-nav">
        {this.props.children}
      </div>
    );
  }
}

export default NavigationMenu;
