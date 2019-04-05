import React from 'react';

import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import RegisterForm from './registerDialog/RegisterForm';
import FormLoading from '../FormLoading';

import { registerActions } from '../../states/register';
import useResponsiveDialog from '../../hooks/useResponsiveDialog';
import usePublicDialog from '../../hooks/usePublicDialog';

const RegisterDialog = ({
  isOpen,
  toggleDialog,
  authState,
  resetRegisterForm,
  registerState,
  requestRegister
}) => {
  const { t } = useTranslation();

  const responsiveDialogProps = useResponsiveDialog();
  const publicDialogProps = usePublicDialog(authState, toggleDialog, resetRegisterForm);

  return (
    <Dialog
      open={isOpen}
      aria-labelledby="register-form-dialog-title"
      {...responsiveDialogProps}
      {...publicDialogProps}
    >
      <DialogTitle id="register-form-dialog-title">{t('Sign up')}</DialogTitle>
      <RegisterForm
        requestRegister={requestRegister}
        registerState={registerState}
        closeDialog={publicDialogProps.onClose}
      />
      {registerState.isLoading && <FormLoading />}
    </Dialog>
  );
};

const mapStateToProps = state => ({
  registerState: state.registration,
  authState: state.auth
});

const mapDispatchToProps = dispatch => ({
  requestRegister: registerData => dispatch(registerActions.register.pending(registerData)),
  resetRegisterForm: () => dispatch(registerActions.registerForm.reset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterDialog);
