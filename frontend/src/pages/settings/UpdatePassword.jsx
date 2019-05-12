import React, { useState } from 'react';
import { useRedux } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { userActions } from '../../states/users';

const UpdatePassword = ({ classes, authState }) => {
  const { t } = useTranslation();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [userAsyncStatus, { updateUser }] = useRedux(
    state => state.userAsyncStatus,
    {
      updateUser: ({ userId, updateFields }) =>
        userActions.updateUser.pending({ userId, updateFields })
    }
  );

  const handleCurrentPasswordChanged = e => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChanged = e => {
    setNewPassword(e.target.value);
  };

  const handleChangePassword = () => {
    updateUser({
      userId: authState.userProfile.id,
      updateFields: {
        current_password: currentPassword,
        new_password: newPassword
      }
    });
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <React.Fragment>
      <Grid container direction="row" spacing={1} className={classes.grid}>
        <Grid item xs={3} align="center">
          <VerifiedUser color="action" className={classes.icon} />
          <Typography
            variant="h5"
            color="textSecondary"
            className={classes.title}
          >
            {t('Password')}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography
              variant="h5"
              color="textSecondary"
              className={classes.title}
            >
              {t('Input your password')}
            </Typography>
            <TextField
              id="outlined-bare"
              label="Current password"
              type="password"
              value={currentPassword}
              margin="normal"
              variant="outlined"
              disabled={userAsyncStatus.isLoading}
              onChange={handleCurrentPasswordChanged}
            />
            <br />
            <TextField
              id="outlined-bare"
              label="New password"
              type="password"
              value={newPassword}
              margin="normal"
              variant="outlined"
              disabled={userAsyncStatus.isLoading}
              onChange={handleNewPasswordChanged}
            />
            <br />
            <Button
              type="submit"
              color="primary"
              disabled={userAsyncStatus.isLoading}
              variant="contained"
              className={classes.button}
              onClick={handleChangePassword}
            >
              {t('Change your password')}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default UpdatePassword;
