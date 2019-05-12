import React from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const JoinStudyClass = ({ classes }) => (
  <Paper className={classes.paper}>
    <Grid container direction="column">
      <Grid item className={classes.gridItem}>
        <Typography variant="h3">Join a class</Typography>
      </Grid>
      <Grid item className={classes.gridItem}>
        <TextField placeholder="eg, English, Math" helperText="Enter a class" />
      </Grid>
      <Grid item className={classes.gridItem}>
        <Button variant="contained" color="primary">
          Request to join
        </Button>
      </Grid>
    </Grid>
  </Paper>
);

export default JoinStudyClass;
