import React from 'react';

import Container from '../Container';
import NavigationBrand from './NavigationBrand';
import NavigationMenu from './NavigationMenu';
import NavigationMenuItem from './NavigationMenuItem';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Container className="pt-3 pb-1">
          <NavigationBrand href="/">
            chendian
          </NavigationBrand>
          <NavigationMenu>
            <NavigationMenuItem href="https://github.com/ghkim3221/chendian">
              GitHub
            </NavigationMenuItem>
          </NavigationMenu>
        </Container>
      </nav>
    );
  }
}

export default Navigation;
