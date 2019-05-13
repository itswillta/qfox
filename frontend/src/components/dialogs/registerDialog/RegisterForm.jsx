import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-final-form';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import InputField from '../../InputField';

import usePasswordField from '../../../hooks/usePasswordField';
import registerFormSchema from './registerForm/registerFormSchema';
import syncValidate from '../../../utils/formValidator/syncValidate';

const RegisterForm = ({ registerState, requestRegister, closeDialog }) => {
  const { t } = useTranslation();

  const toggleVisiblityProps = usePasswordField();

  const handleSubmitRegisterForm = useCallback(
    values => {
      requestRegister(values);
    },
    [requestRegister]
  );

  return (
    <Form
      onSubmit={handleSubmitRegisterForm}
      initialValues={{ name: '', username: '', password: '' }}
      validate={syncValidate(registerFormSchema)}
      subscription={{ submitting: true, pristine: true }}
      render={({ handleSubmit, form }) => (
        <form name="registerForm" onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <InputField
                  required
                  label="Name"
                  name="name"
                  serverError={registerState.error.name}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  required
                  label="Username"
                  name="username"
                  serverError={registerState.error.username}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  required
                  label="Password"
                  name="password"
                  serverError={registerState.error.password}
                  {...toggleVisiblityProps}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button type="reset" color="primary" onClick={closeDialog}>
              {t('Close')}
            </Button>
            <Button type="submit" color="primary" variant="contained">
              {t('Sign up')}
            </Button>
          </DialogActions>
        </form>
      )}
    />
  );
};

export default RegisterForm;
