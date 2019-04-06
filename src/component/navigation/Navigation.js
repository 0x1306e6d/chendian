import React from 'react';

import Container from '../Container';

import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Container>
          <span className="navbar-brand">chendian</span>
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link"
              href="https://github.com/ghkim3221/chendian">GitHub</a>
          </div>
        </Container>
      </nav>
    );
  }
}

export default Navigation;
