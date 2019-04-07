import React from 'react';
import { connect } from 'react-redux';

import Container from './component/Container';
import HexStringInput from './component/input/HexStringInput';
import Navigation from './component/navigation/Navigation';
import DoubleSection from './component/sections/DoubleSection';
import DWORDSection from './component/sections/DWORDSection';
import FloatSection from './component/sections/FloatSection';
import QWORDSection from './component/sections/QWORDSection';
import WORDSection from './component/sections/WORDSection';

class App extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <div>
        <Navigation />
        <Container className="pt-3 pb-5">
          <div className="row">
            <div className="col-12">
              <HexStringInput />
            </div>
            <div className="col-12">
              <QWORDSection value={value} />
            </div>
            <div className="col-12">
              <DWORDSection value={value} />
            </div>
            <div className="col-12">
              <WORDSection value={value} />
            </div>
            <div className="col-12">
              <DoubleSection value={value} />
            </div>
            <div className="col-12">
              <FloatSection value={value} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value
});

export default connect(mapStateToProps)(App);
