import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Person from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const UpdateName = ({ classes, authState }) => {
  const [name, setName] = useState('');

  const handleNameChanged = e => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    console.log(name);
  };

  return (
    <React.Fragment>
      <Grid container direction="row" spacing={1} className={classes.grid}>
        <Grid item xs={3} align="center">
          <Person color="action" className={classes.icon} />
          <Typography
            variant="h5"
            color="textSecondary"
            className={classes.title}
          >
            Name
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography
              variant="h5"
              color="textSecondary"
              className={classes.title}
            >
              Input your name
            </Typography>
            <TextField
              id="outlined-bare"
              defaultValue={authState.userProfile.name}
              margin="normal"
              variant="outlined"
              onChange={handleNameChanged}
            />
            <br />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={handleSubmit}
            >
              Change your name
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default UpdateName;
