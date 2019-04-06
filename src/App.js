import React from 'react';

import Container from './component/Container';
import Input from './component/input/Input';
import Navigation from './component/navigation/Navigation';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container className="pt-3 pb-5">
          <Input />
        </Container>
      </div>
    );
  }
}

export default App;
