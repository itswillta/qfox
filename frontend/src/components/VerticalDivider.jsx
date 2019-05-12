import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  verticalDividerContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  verticalDivider: {
    height: '70%',
    minHeight: 16,
    margin: theme.spacing(0, 1.5),
    borderRight: `2px solid ${theme.palette.grey[300]}`
  }
}));

const VerticalDivider = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.verticalDividerContainer}>
      <div className={classes.verticalDivider} />
    </Grid>
  );
};

export default VerticalDivider;
