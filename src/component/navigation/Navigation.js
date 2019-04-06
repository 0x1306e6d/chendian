import React from 'react';

import Container from '../Container';
import NavigationBrand from './NavigationBrand';
import NavigationMenu from './NavigationMenu';
import NavigationMenuItem from './NavigationMenuItem';

import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Container>
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
