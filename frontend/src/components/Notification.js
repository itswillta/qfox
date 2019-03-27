import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Snackbar from '@material-ui/core/Snackbar';

let openSnackbarFn;

const Notification = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openSnackbar = newMessage => {
    setIsOpen(true);
    setMessage(newMessage);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    openSnackbarFn = openSnackbar;
  }, []);

  if (!message) {
    return null;
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={5000}
      open={isOpen && message.length > 0}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'notification-message'
      }}
      message={<span id="notification-message">{t(message)}</span>}
    />
  );
};

export const openSnackbar = message => {
  openSnackbarFn(message);
};

export default Notification;
