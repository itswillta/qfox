import React from 'react';
import classnames from 'classnames';

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
    borderRight: `2px solid ${theme.palette.grey[300]}`
  },
  margin: {
    margin: theme.spacing(0, 1.5)
  }
}));

const VerticalDivider = ({ compact }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.verticalDividerContainer}>
      <div
        className={
          compact ? classes.verticalDivider : classnames(classes.verticalDivider, classes.margin)
        }
      />
    </Grid>
  );
};

export default VerticalDivider;
