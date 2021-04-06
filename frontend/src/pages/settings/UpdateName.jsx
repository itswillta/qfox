import React, { useState } from 'react';
import { useRedux } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Person from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { userActions } from '../../states/users';

const UpdateName = ({ classes, authState }) => {
  const { t } = useTranslation();

  const [name, setName] = useState(authState.userProfile.name);

  const [userAsyncStatus, { updateUser }] = useRedux(
    state => state.userAsyncStatus,
    {
      updateUser: ({ userId, updateFields }) =>
        userActions.updateUser.pending({ userId, updateFields })
    }
  );

  const handleNameChanged = e => {
    setName(e.target.value);
  };

  const handleChangeUserName = () => {
    updateUser({ userId: authState.userProfile.id, updateFields: { name } });
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
            {t('Name')}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography
              variant="h5"
              color="textSecondary"
              className={classes.title}
            >
              {t('Input your name')}
            </Typography>
            <TextField
              id="outlined-bare"
              value={name}
              margin="normal"
              variant="outlined"
              disabled={userAsyncStatus.isLoading}
              onChange={handleNameChanged}
            />
            <br />
            <Button
              type="submit"
              color="primary"
              disabled={userAsyncStatus.isLoading}
              variant="contained"
              className={classes.button}
              onClick={handleChangeUserName}
            >
              {t('Change your name')}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default UpdateName;
