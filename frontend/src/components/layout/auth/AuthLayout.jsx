import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import blobBackground from '/images/blob-background.svg';
import logo from '/images/logo-with-bg.svg';
import waveBackground from '/images/wave-background.svg';

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    height: 'fit-content',
    backgroundImage: `url('${blobBackground}')`
  },
  paper: {
    position: 'relative',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    backgroundImage: `url('${waveBackground}')`,
    backgroundSize: 'cover'
  },
  authFormContainer: {
    padding: theme.spacing(6)
  }
}));

const AuthLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Paper className={classes.paper}>
        <Grid className={classes.authFormContainer} container alignItems="center" direction="column" spacing={6}>
          <Grid item>
            <Grid container alignItems="center" direction="column" spacing={2}>
              <Grid item>
                <img src={logo} alt="logo" width={164} />
              </Grid>
              <Grid item>
                <Typography variant="h2">
                  <strong style={{ fontWeight: 500 }}>QFox</strong>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {children}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AuthLayout;
