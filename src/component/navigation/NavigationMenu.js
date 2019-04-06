import React from 'react';

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
