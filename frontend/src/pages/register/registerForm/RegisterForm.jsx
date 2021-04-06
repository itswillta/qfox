import React, { useCallback } from 'react';
import { useRedux } from 'react-redux';
import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './RegisterForm.styles';
import InputField from '../../../components/InputField';
import usePasswordField from '../../../hooks/usePasswordField';
import registerFormSchema from './registerFormSchema';
import syncValidate from '../../../utils/formValidator/syncValidate';
import { registerActions } from '../../../states/register';
import appRoutes from '../../../routers/appRoutes';

const RegisterForm = () => {
  const classes = useStyles();
  const toggleVisiblityProps = usePasswordField();

  const [registerState, { requestRegister }] = useRedux(
    state => state.registration,
    {
      requestRegister: registerData => registerActions.register.pending(registerData)
    }
  );

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
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <InputField
                required
                label="Name"
                name="name"
                serverError={registerState.error.name}
                disabled={registerState.isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                required
                label="Username"
                name="username"
                serverError={registerState.error.username}
                disabled={registerState.isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                required
                label="Password"
                name="password"
                serverError={registerState.error.password}
                {...toggleVisiblityProps}
                disabled={registerState.isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.registerButton} type="submit" variant="contained" color="primary" fullWidth disabled={registerState.isLoading}>
                {registerState.isLoading ? <CircularProgress color="primary" size="32px" /> : 'Register'}
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.loginSection}>
              Already have an account? <Link className={classes.loginLink} to={appRoutes.Welcome.url}>Login now</Link>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default RegisterForm;
