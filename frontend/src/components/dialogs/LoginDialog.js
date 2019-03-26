import React, { useState, useEffect } from 'react';
import validator from 'validator';

import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

import useStyles from './loginDialog/LoginDialog.styles';
import useTextField from '../../hooks/useTextField';
import usePasswordField from '../../hooks/usePasswordField';

import { authActions } from '../../services/auth';

const LoginDialog = props => {
  const { isOpen, toggleDialog, login, authState, reset } = props;

  const { t } = useTranslation();

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const usernameFieldProps = useTextField('');
  const [usernameFieldClientError, setUsernameFieldClientError] = useState('');

  const passwordFieldProps = usePasswordField('');
  const [passwordFieldClientError, setPasswordFieldClientError] = useState('');

  useEffect(() => {
    if (!validator.isEmpty(usernameFieldProps.value)) {
      setUsernameFieldClientError('');
    }

    if (!validator.isEmpty(passwordFieldProps.value)) {
      setPasswordFieldClientError('');
    }
  }, [usernameFieldProps.value, passwordFieldProps.value]);

  useEffect(() => {
    if (authState.isAuthenticated) {
      toggleDialog(false)();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.isAuthenticated]);

  useEffect(() => {
    if (isOpen) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const onFormSubmit = e => {
    e.preventDefault();

    let shouldLogin = true;

    setUsernameFieldClientError('');
    setPasswordFieldClientError('');

    if (validator.isEmpty(usernameFieldProps.value)) {
      setUsernameFieldClientError('Username is required.');
      shouldLogin = false;
    }

    if (validator.isEmpty(passwordFieldProps.value)) {
      setPasswordFieldClientError('Password is required.');
      shouldLogin = false;
    }

    if (shouldLogin) {
      login({ username: usernameFieldProps.value, password: passwordFieldProps.value });
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={toggleDialog(false)}
      aria-labelledby="login-form-dialog-title"
      fullScreen={isMobile}
      PaperProps={{
        className: classes.dialogPaper
      }}
    >
      <DialogTitle id="login-form-dialog-title">{t('Log in')}</DialogTitle>
      <form name="login-form" noValidate onSubmit={onFormSubmit}>
        <DialogContent>
          <Grid container direction="column">
            <Grid item xs={12}>
              <TextField
                required
                label={t('Username')}
                {...usernameFieldProps}
                margin="normal"
                variant="outlined"
                name="username"
                error={!!usernameFieldClientError || !!authState.error.username}
                helperText={usernameFieldClientError || '' || authState.error.username}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label={t('Password')}
                {...passwordFieldProps}
                margin="normal"
                variant="outlined"
                name="password"
                error={!!passwordFieldClientError || !!authState.error.password}
                helperText={passwordFieldClientError || '' || authState.error.password}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type="reset" onClick={toggleDialog(false)} color="primary">
            {t('Close')}
          </Button>
          <Button type="submit" color="primary" variant="contained" disabled={authState.isLoading}>
            {t('Log in')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  authState: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: loginData => dispatch(authActions.login.pending(loginData)),
  reset: () => dispatch(authActions.loginForm.reset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginDialog);
