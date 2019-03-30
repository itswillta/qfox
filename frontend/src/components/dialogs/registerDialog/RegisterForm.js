import React from 'react';
import { useTranslation } from 'react-i18next';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Form from '../../Form';
import InputField from '../../InputField';

import usePasswordField from '../../../hooks/usePasswordField';
import registerFormSchema from './registerForm/registerFormSchema';

const RegisterForm = props => {
  const { registerState, requestRegister, closeDialog } = props;
  const { t } = useTranslation();

  const toggleVisiblityProps = usePasswordField();

  const handleSubmit = values => {
    requestRegister(values);
  };

  return (
    <Form
      name="registerForm"
      noValidate
      initialValues={{ username: '', name: '', password: '' }}
      validationSchema={registerFormSchema}
      onSubmit={handleSubmit}
    >
      <DialogContent>
        <Grid container direction="column">
          <Grid item xs={12}>
            <InputField required label="Name" name="name" serverError={registerState.error.name} />
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
    </Form>
  );
};

export default RegisterForm;
