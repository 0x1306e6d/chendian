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
          <div className="row">
            <div className="col-12">
              <Input />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
