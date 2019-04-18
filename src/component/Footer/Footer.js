import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  typography: {
    fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <footer className={classes.root}>
      <Typography
        className={classes.typography}
        align="center"
        color="textPrimary"
        variant="subtitle1">
        Made by Gihwan Kim, Powered by GitHub Pages
      </Typography>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);