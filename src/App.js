import React from 'react';
import { connect } from 'react-redux';

import Container from './component/Container';
import HexStringInput from './component/HexStringInput';
import Navigation from './component/Navigation';
import DoubleSection from './component/sections/DoubleSection';
import DWORDSection from './component/sections/DWORDSection';
import FloatSection from './component/sections/FloatSection';
import QWORDSection from './component/sections/QWORDSection';
import WORDSection from './component/sections/WORDSection';

class App extends React.Component {
  render() {
    const { input } = this.props;

    return (
      <div>
        <Navigation />
        <Container className="pt-3 pb-5">
          <div className="row">
            <div className="col-12">
              <HexStringInput />
            </div>
            <div className="col-12">
              <QWORDSection value={input} />
            </div>
            <div className="col-12">
              <DWORDSection value={input} />
            </div>
            <div className="col-12">
              <WORDSection value={input} />
            </div>
            <div className="col-12">
              <DoubleSection value={input} />
            </div>
            <div className="col-12">
              <FloatSection value={input} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  input: state.input
});

export default connect(mapStateToProps)(App);
