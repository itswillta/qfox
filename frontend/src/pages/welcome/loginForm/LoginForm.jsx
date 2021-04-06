import React, { useCallback } from 'react';
import { useRedux } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from 'react-final-form';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import InputField from '../../../components/InputField';
import usePasswordField from '../../../hooks/usePasswordField';
import loginFormSchema from './loginFormSchema';
import syncValidate from '../../../utils/formValidator/syncValidate';
import useStyles from './LoginForm.styles';
import { authActions } from '../../../states/auth';
import appRoutes from '../../../routers/appRoutes';

const LoginForm = () => {
  const classes = useStyles();

  const [authState, { requestLogin }] = useRedux(state => state.auth, {
    requestLogin: loginData => authActions.login.pending(loginData),
  });

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
      name="loginForm"
      initialValues={{ username: '', password: '' }}
      validate={syncValidate(loginFormSchema)}
      subscription={{ submitting: true, pristine: true }}
      render={({ handleSubmit, form }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <InputField
                required
                label="Username"
                name="username"
                serverError={authState.error.username}
                disabled={authState.isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                required
                label="Password"
                name="password"
                serverError={authState.error.password}
                {...toggleVisiblityProps}
                disabled={authState.isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.loginButton} type="submit" variant="contained" color="primary" fullWidth disabled={authState.isLoading}>
                {authState.isLoading ? <CircularProgress color="primary" size="32px" /> : 'Login'}
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.registerSection}>
              New here? <Link className={classes.registerLink} to={appRoutes.Register.url}>Register now</Link>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default LoginForm;
