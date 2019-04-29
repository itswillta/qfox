import React from 'react';
import { reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import InputField from '../../InputField';

import usePasswordField from '../../../hooks/usePasswordField';
import loginFormSchema from './loginForm/loginFormSchema';
import syncValidate from '../../../utils/formValidator/syncValidate';

const LoginForm = ({ authState, handleSubmit, closeDialog }) => {
  const { t } = useTranslation();

  const toggleVisiblityProps = usePasswordField();

  return (
    <form name="loginForm" onSubmit={handleSubmit} noValidate>
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
        <Button type="submit" color="primary" variant="contained" disabled={authState.isLoading}>
          {t('Log in')}
        </Button>
      </DialogActions>
    </form>
  );
};

export default reduxForm({
  form: 'loginForm',
  validate: syncValidate(loginFormSchema)
})(LoginForm);
