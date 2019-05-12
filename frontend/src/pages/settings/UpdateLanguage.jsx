import React, { useState } from 'react';
import { useRedux } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Language from '@material-ui/icons/Language';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { userActions } from '../../states/users';

const languageOptions = [
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'vi',
    label: 'Tiếng Việt'
  }
];

const UpdateLanguage = ({ authState, classes }) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(authState.userProfile.language);

  const [userAsyncStatus, { updateUser }] = useRedux(
    state => state.userAsyncStatus,
    {
      updateUser: ({ userId, updateFields }) =>
        userActions.updateUser.pending({ userId, updateFields })
    }
  );

  const handleLanguageSelected = e => {
    setLanguage(e.target.value);
  };

  const handleChangeLanguage = () => {
    updateUser({
      userId: authState.userProfile.id,
      updateFields: { language }
    });
  };

  return (
    <React.Fragment>
      <Grid container direction="row" spacing={1} className={classes.grid}>
        <Grid item xs={3} align="center">
          <Language color="action" className={classes.icon} />
          <Typography
            variant="h5"
            color="textSecondary"
            className={classes.title}
          >
            {t('Language')}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography
              variant="h5"
              color="textSecondary"
              className={classes.title}
            >
              {t('Choose your language')}
            </Typography>
            <Typography variant="subtitle1">
              {t(
                'Adjust the language you see in menus, dialogues and instructions and apply the corresponding date and time formats.'
              )}
            </Typography>
            <TextField
              select
              className={classes.textField}
              value={language}
              onChange={handleLanguageSelected}
              disabled={userAsyncStatus.isLoading}
              SelectProps={{
                native: true
              }}
              margin="normal"
              variant="outlined"
            >
              {languageOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <br />
            <Button
              type="submit"
              color="primary"
              disabled={userAsyncStatus.isLoading}
              variant="contained"
              className={classes.button}
              onClick={handleChangeLanguage}
            >
              {t('Change your language')}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default UpdateLanguage;
