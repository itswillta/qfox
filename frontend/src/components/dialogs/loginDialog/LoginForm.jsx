import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import InputField from '../../InputField';

import usePasswordField from '../../../hooks/usePasswordField';
import loginFormSchema from './loginForm/loginFormSchema';
import syncValidate from '../../../utils/formValidator/syncValidate';

const LoginForm = ({ authState, closeDialog, requestLogin }) => {
  const { t } = useTranslation();

  const handleSubmitLoginForm = useCallback(
    values => {
      requestLogin(values);
    },
    [requestLogin]
  );

  const toggleVisiblityProps = usePasswordField();

  return (
    <Form
      onSubmit={handleSubmitLoginForm}
      initialValues={{ username: '', password: '' }}
      validate={syncValidate(loginFormSchema)}
      subscription={{ submitting: true, pristine: true }}
      render={({ handleSubmit, form }) => (
        <form onSubmit={handleSubmit} noValidate>
          <DialogContent>
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <InputField
                  required
                  label="Username"
                  name="username"
                  serverError={authState.error.username}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  required
                  label="Password"
                  name="password"
                  serverError={authState.error.password}
                  {...toggleVisiblityProps}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button type="reset" color="primary" onClick={closeDialog}>
              {t('Close')}
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={authState.isLoading}
            >
              {t('Log in')}
            </Button>
          </DialogActions>
        </form>
      )}
    />
  );
};

export default LoginForm;
