import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import useStyles from './loginDialog/LoginDialog.styles';
import LoginForm from './loginDialog/LoginForm';
import FormLoading from '../FormLoading';

import { authActions } from '../../services/auth';
import { openSnackbar } from '../Notification';

const LoginDialog = props => {
  const { isOpen, toggleDialog, authState, requestLogin, resetLoginForm } = props;

  const { t } = useTranslation();

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const closeDialog = () => {
    resetLoginForm();
    toggleDialog(false)();
  };

  useEffect(() => {
    if (authState.isAuthenticated) {
      toggleDialog(false)();
    } else if (authState.error.message) {
      openSnackbar(authState.error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);

  return (
    <Dialog
      open={isOpen}
      onClose={closeDialog}
      aria-labelledby="login-form-dialog-title"
      fullScreen={isMobile}
      PaperProps={{
        className: classes.dialogPaper
      }}
    >
      <DialogTitle id="login-dialog-title">{t('Log in')}</DialogTitle>
      <LoginForm requestLogin={requestLogin} authState={authState} closeDialog={closeDialog} />
      {authState.isLoading && <FormLoading />}
    </Dialog>
  );
};

const mapStateToProps = state => ({
  authState: state.auth
});

const mapDispatchToProps = dispatch => ({
  requestLogin: loginData => dispatch(authActions.login.pending(loginData)),
  resetLoginForm: () => dispatch(authActions.loginForm.reset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginDialog);
