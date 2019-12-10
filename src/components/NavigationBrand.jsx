import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShuffleIcon from '@material-ui/icons/Shuffle';

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: 'lowercase',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const NavigationBrand = () => {
  const classes = useStyles();

  return (
    <Button className={classes.root} color="inherit" component="a" href="/">
      <ShuffleIcon className={classes.icon} color="inherit" />
      <Typography color="inherit" component="h1" variant="h6">
        chendian
      </Typography>
    </Button>
  );
};

export default NavigationBrand;
