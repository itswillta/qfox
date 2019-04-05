import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import LoginForm from './loginDialog/LoginForm';
import FormLoading from '../FormLoading';

import { authActions } from '../../states/auth';
import useResponsiveDialog from '../../hooks/useResponsiveDialog';
import usePublicDialog from '../../hooks/usePublicDialog';

const LoginDialog = ({ isOpen, toggleDialog, authState, requestLogin, resetLoginForm }) => {
  const { t } = useTranslation();

  const responsiveDialogProps = useResponsiveDialog();
  const publicDialogProps = usePublicDialog(authState, toggleDialog, resetLoginForm);

  return (
    <Dialog
      open={isOpen}
      aria-labelledby="login-form-dialog-title"
      {...responsiveDialogProps}
      {...publicDialogProps}
    >
      <DialogTitle id="login-dialog-title">{t('Log in')}</DialogTitle>
      <LoginForm
        requestLogin={requestLogin}
        authState={authState}
        closeDialog={publicDialogProps.onClose}
      />
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
