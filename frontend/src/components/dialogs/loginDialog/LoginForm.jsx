import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
 
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import facebookIcon from '/images/facebook.svg';
import googleIcon from '/images/search.svg';

import InputField from '../../InputField';

import usePasswordField from '../../../hooks/usePasswordField';
import loginFormSchema from './loginForm/loginFormSchema';
import syncValidate from '../../../utils/formValidator/syncValidate';
import useStyles from './loginForm/LoginForm.styles';

const LoginForm = ({ authState, closeDialog, requestLogin }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const handleSubmitLoginForm = useCallback(
    values => {
      requestLogin(values);
    },
    [requestLogin]
  );

  const handleLoginWithFacebook = () => {

    //const popup = window.open ("http://localhost/api/auth/facebook","facebookLogin","status=1");

    //popup.postMessage("something wrong", "http://localhost:1234/main");

    // console.log(popup.postMessage());
    // setTimeout(function(){ console.log(popup.document.getElementsByTagName('pre')[0].innerHTML) }, 10000);
    // popup.onload = function() {
    //   console.log('im running');
    //   setTimeout(function(){ console.log(popup.document.body.pre) }, 10000);
    // }  
    // function receiveMessage(event){
    //   if(event.origin !== "http://localhost:1234/main")
    //     return;
    // }
    // window.addEventListener("message", receiveMessage, false);
  }

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
          <DialogContent>
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <Button variant="outlined" className={classes.button} 
                fullWidth onClick={handleLoginWithFacebook}>
                  Login with Facebook
                  <img src={facebookIcon} className={classes.rightIcon} />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" className={classes.button} 
                fullWidth>
                  Login with Google
                  <img src={googleIcon} className={classes.rightIcon} />
                </Button>
              </Grid>
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
