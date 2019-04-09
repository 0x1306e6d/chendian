import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Container from './component/Container';
import HexStringInput from './component/HexStringInput';
import Navigation from './component/Navigation';
import Section from './component/Section';

import BigEndianConverter from './component/converter/BigEndianConverter';
import LittleEndianConverter from './component/converter/LittleEndianConverter';

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
              <Section title="64 bit integer">
                <div className={classNames('container-fluid')}>
                  <div className={classNames('row')}>
                    <div className={classNames('col-12', 'col-sm-6', 'mb-3', 'mb-sm-0')}>
                      <BigEndianConverter word={8} value={input} />
                    </div>
                    <div className={classNames('col-12', 'col-sm-6')}>
                      <LittleEndianConverter word={8} value={input} />
                    </div>
                  </div>
                </div>
              </Section>
            </div>
            <div className="col-12">
              <Section title="32 bit integer">
                <div className={classNames('container-fluid')}>
                  <div className={classNames('row')}>
                    <div className={classNames('col-12', 'col-sm-6', 'mb-3', 'mb-sm-0')}>
                      <BigEndianConverter word={8} value={input} />
                    </div>
                    <div className={classNames('col-12', 'col-sm-6')}>
                      <LittleEndianConverter word={8} value={input} />
                    </div>
                  </div>
                </div>
              </Section>
            </div>
            <div className="col-12">
              <Section title="16 bit integer">
                <div className={classNames('container-fluid')}>
                  <div className={classNames('row')}>
                    <div className={classNames('col-12', 'col-sm-6', 'mb-3', 'mb-sm-0')}>
                      <BigEndianConverter word={8} value={input} />
                    </div>
                    <div className={classNames('col-12', 'col-sm-6')}>
                      <LittleEndianConverter word={8} value={input} />
                    </div>
                  </div>
                </div>
              </Section>
            </div>
            <div className="col-12">
              <Section title="double">
                <div className={classNames('container-fluid')}>
                  <div className={classNames('row')}>
                    <div className={classNames('col-12', 'col-sm-6', 'mb-3', 'mb-sm-0')}>
                      <BigEndianConverter word={8} value={input} />
                    </div>
                    <div className={classNames('col-12', 'col-sm-6')}>
                      <LittleEndianConverter word={8} value={input} />
                    </div>
                  </div>
                </div>
              </Section>
            </div>
            <div className="col-12">
              <Section title="float">
                <div className={classNames('container-fluid')}>
                  <div className={classNames('row')}>
                    <div className={classNames('col-12', 'col-sm-6', 'mb-3', 'mb-sm-0')}>
                      <BigEndianConverter word={8} value={input} />
                    </div>
                    <div className={classNames('col-12', 'col-sm-6')}>
                      <LittleEndianConverter word={8} value={input} />
                    </div>
                  </div>
                </div>
              </Section>
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
