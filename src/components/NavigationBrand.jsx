import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShuffleIcon from '@material-ui/icons/Shuffle';

const styles = (theme) => ({
  root: {
    textTransform: 'lowercase',
  },
  icon: {
    marginRight: theme.spacing.unit,
  },
});

const NavigationBrand = ({ classes }) => (
  <Button className={classes.root} color="inherit" component="a" href="/">
    <ShuffleIcon className={classes.icon} color="inherit" />
    <Typography color="inherit" component="h1" variant="h6">
      chendian
    </Typography>
  </Button>
);

NavigationBrand.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(NavigationBrand);
