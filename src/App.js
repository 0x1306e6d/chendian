import React from 'react';

import Container from './component/Container';
import Navigation from './component/navigation/Navigation';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <h1>chendian</h1>
        </Container>
      </div>
    );
  }
}

export default App;
