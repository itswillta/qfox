import React from 'react';
import { useTranslation } from 'react-i18next';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StartGameDialog = ({ isOpen, handleStartGame }) => {
  const { t } = useTranslation();

  return (
    <Dialog open={isOpen} aria-labelledby="login-form-dialog-title">
      <DialogTitle id="login-dialog-title">{t('Match everything')}</DialogTitle>
      <DialogContent>
        <Typography gutterBottom>
          {t('Select the same corresponding items to match them up')}
        </Typography>
      </DialogContent>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        onClick={handleStartGame}
      >
        {t('Start Game')}
      </Button>
    </Dialog>
  );
};

export default StartGameDialog;
