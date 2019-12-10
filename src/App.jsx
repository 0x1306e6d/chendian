import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Float from './components/Float';
import Footer from './components/Footer';
import HexStringInput from './components/HexStringInput';
import Integer from './components/Integer';
import Navigation from './components/Navigation';
import Section from './components/Section';

const muiTheme = createMuiTheme({
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

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
}));

const IntegerSection = Section(Integer);
const FloatSection = Section(Float);

const App = ({ version, input }) => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Navigation />
      <Container className={classes.root}>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <HexStringInput />
          </Grid>
          <Grid xs={12} item>
            <IntegerSection array={input} byteLength={8} title="64 bit integer" />
          </Grid>
          <Grid xs={12} item>
            <IntegerSection array={input} byteLength={4} title="32 bit integer" />
          </Grid>
          <Grid xs={12} item>
            <IntegerSection array={input} byteLength={2} title="16 bit integer" />
          </Grid>
          <Grid xs={12} item>
            <FloatSection array={input} byteLength={8} title="double" />
          </Grid>
          <Grid xs={12} item>
            <FloatSection array={input} byteLength={4} title="float" />
          </Grid>
        </Grid>
      </Container>
      <Footer version={version} />
    </MuiThemeProvider>
  );
};

App.propTypes = {
  version: PropTypes.string.isRequired,
  input: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = (state) => ({
  input: state.input,
});

export default connect(mapStateToProps)(App);
