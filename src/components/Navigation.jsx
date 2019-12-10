import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

import GitHubIcon from './GitHubIcon';
import NavigationBrand from './NavigationBrand';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
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
};

export default Navigation;
