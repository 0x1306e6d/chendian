import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

import GitHubIcon from './GitHubIcon';
import NavigationBrand from './NavigationBrand';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
});

const Navigation = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <NavigationBrand />
        <div className={classes.grow} />
        <IconButton color="inherit" component="a" href="https://github.com/ghkim3221/chendian">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

Navigation.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    grow: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Navigation);
