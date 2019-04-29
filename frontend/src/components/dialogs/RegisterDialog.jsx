import React from 'react';

import { useRedux, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import RegisterForm from './registerDialog/RegisterForm';
import FormLoading from '../FormLoading';

import { registerActions } from '../../states/register';
import useResponsiveDialog from '../../hooks/useResponsiveDialog';
import usePublicDialog from '../../hooks/usePublicDialog';

const RegisterDialog = ({ isOpen, toggleDialog }) => {
  const { t } = useTranslation();

  const [registerState, { requestRegister, resetRegisterForm }] = useRedux(
    state => state.registration,
    {
      requestRegister: registerData => registerActions.register.pending(registerData),
      resetRegisterForm: () => registerActions.registerForm.reset()
    }
  );
  const authState = useSelector(state => state.auth);

  const handleSubmitRegisterForm = values => {
    requestRegister(values);
  };

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
        onSubmit={handleSubmitRegisterForm}
        registerState={registerState}
        closeDialog={publicDialogProps.onClose}
      />
      {registerState.isLoading && <FormLoading />}
    </Dialog>
  );
};

export default RegisterDialog;
