import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import Button from '@material-ui/core/Button';

import { openDialog } from '../../../Dialogs';

const UnauthenticatedActions = ({ classes }) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Button color="inherit" onClick={() => openDialog('login')}>
        {t('Log in')}
      </Button>
      <Button
        className={clsx(classes.signUpButton, 'button-secondary')}
        variant="contained"
        onClick={() => openDialog('register')}
      >
        {t('Sign up')}
      </Button>
    </React.Fragment>
  );
};

export default UnauthenticatedActions;
