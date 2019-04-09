import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import HexStringInput from './component/HexStringInput';
import Navigation from './component/Navigation';
import Section from './component/Section';

import BigEndianConverter from './component/converter/BigEndianConverter';
import LittleEndianConverter from './component/converter/LittleEndianConverter';

const styles = (theme) => ({
  layout: {
    width: 'auto',
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      width: '540px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      width: '720px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      width: '960px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      width: '1140px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

class App extends React.Component {
  render() {
    const { classes, input } = this.props;

    return (
      <div>
        <Navigation />
        <Grid className={classes.layout} spacing={16} container>
          <Grid xs={12} item>
            <HexStringInput />
          </Grid>
          <Grid xs={12} item>
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
          </Grid>
          <Grid xs={12} item>
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
          </Grid>
          <Grid xs={12} item>
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
          </Grid>
          <Grid xs={12} item>
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
          </Grid>
          <Grid xs={12} item>
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
          </Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  input: state.input
});

export default connect(mapStateToProps)(withStyles(styles)(App));