import React from 'react';
import { makeStyles } from '@material-ui/styles';

import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    zIndex: 3
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: theme.palette.grey[500],
    opacity: 0.4,
    zIndex: 2
  }
}));

const FormLoading = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.overlay} />
      <LinearProgress className={classes.progress} color="primary" />
    </React.Fragment>
  );
};

export default FormLoading;
