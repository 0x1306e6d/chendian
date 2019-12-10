import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  typography: {
    fontFamily:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
}));

const Footer = ({ version }) => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography
        className={classes.typography}
        align="center"
        color="textPrimary"
        variant="subtitle1"
      >
        {version}
      </Typography>
      <Typography
        className={classes.typography}
        align="center"
        color="textPrimary"
        variant="subtitle1"
      >
        Made by Gihwan Kim, Powered by GitHub Pages
      </Typography>
    </footer>
  );
};

Footer.propTypes = {
  version: PropTypes.string.isRequired,
};

export default Footer;
