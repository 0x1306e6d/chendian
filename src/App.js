import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import BigEndianDouble from './component/BigEndianDouble';
import BigEndianFloat from './component/BigEndianFloat';
import BigEndianInteger from './component/BigEndianInteger';
import EndianConverter from './component/EndianConverter';
import HexStringInput from './component/HexStringInput';
import LittleEndianDouble from './component/LittleEndianDouble';
import LittleEndianFloat from './component/LittleEndianFloat';
import LittleEndianInteger from './component/LittleEndianInteger';
import Navigation from './component/Navigation';
import Section from './component/Section';

const styles = (theme) => ({
  layout: {
    width: 'auto',
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
              <EndianConverter
                bigEndian={
                  <BigEndianInteger byteArray={input} size={64} />
                }
                littleEndian={
                  <LittleEndianInteger byteArray={input} size={64} />
                } />
            </Section>
          </Grid>
          <Grid xs={12} item>
            <Section title="32 bit integer">
              <EndianConverter
                bigEndian={
                  <BigEndianInteger byteArray={input} size={32} />
                }
                littleEndian={
                  <LittleEndianInteger byteArray={input} size={32} />
                } />
            </Section>
          </Grid>
          <Grid xs={12} item>
            <Section title="16 bit integer">
              <EndianConverter
                bigEndian={
                  <BigEndianInteger byteArray={input} size={16} />
                }
                littleEndian={
                  <LittleEndianInteger byteArray={input} size={16} />
                } />
            </Section>
          </Grid>
          <Grid xs={12} item>
            <Section title="double">
              <EndianConverter
                bigEndian={<BigEndianDouble />}
                littleEndian={<LittleEndianDouble />} />
            </Section>
          </Grid>
          <Grid xs={12} item>
            <Section title="float">
              <EndianConverter
                bigEndian={<BigEndianFloat />}
                littleEndian={<LittleEndianFloat />} />
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