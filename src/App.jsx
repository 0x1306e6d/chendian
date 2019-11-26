import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Float from './components/Float';
import Footer from './components/Footer';
import HexStringInput from './components/HexStringInput';
import Integer from './components/Integer';
import Navigation from './components/Navigation';
import Section from './components/Section';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#263238',
      dark: '#000A12',
      light: '#4F5B62',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

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

const IntegerSection = Section(Integer);
const FloatSection = Section(Float);

const App = ({ classes, version, input }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Grid className={classes.layout} spacing={16} container>
        <Grid xs={12} item>
          <HexStringInput />
        </Grid>
        <Grid xs={12} item>
          <IntegerSection
            array={input}
            byteLength={8}
            title="64 bit integer" />
        </Grid>
        <Grid xs={12} item>
          <IntegerSection
            array={input}
            byteLength={4}
            title="32 bit integer" />
        </Grid>
        <Grid xs={12} item>
          <IntegerSection
            array={input}
            byteLength={2}
            title="16 bit integer" />
        </Grid>
        <Grid xs={12} item>
          <FloatSection
            array={input}
            byteLength={8}
            title="double" />
        </Grid>
        <Grid xs={12} item>
          <FloatSection
            array={input}
            byteLength={4}
            title="float" />
        </Grid>
      </Grid>
      <Footer version={version} />
    </MuiThemeProvider>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  version: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  input: state.input
});

export default connect(mapStateToProps)(withStyles(styles)(App));