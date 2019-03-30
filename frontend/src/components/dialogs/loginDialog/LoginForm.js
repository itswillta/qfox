import React from 'react';
import { useTranslation } from 'react-i18next';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Form from '../../Form';
import InputField from '../../InputField';

import usePasswordField from '../../../hooks/usePasswordField';
import loginFormSchema from './loginForm/loginFormSchema';

const LoginForm = ({ authState, requestLogin, closeDialog }) => {
  const { t } = useTranslation();

  const toggleVisiblityProps = usePasswordField();

  const handleSubmit = values => {
    requestLogin(values);
  };

  return (
    <Form
      name="loginForm"
      noValidate
      initialValues={{ username: '', password: '' }}
      validationSchema={loginFormSchema}
      onSubmit={handleSubmit}
    >
      <DialogContent>
        <Grid container direction="column">
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
    </Form>
  );
};

export default LoginForm;
