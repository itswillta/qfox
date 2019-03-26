import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

let openSnackbarFn;

const Notification = () => {
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
        'aria-describedby': 'message-id'
      }}
      message={<span id="message-id">{message}</span>}
    />
  );
};

export const openSnackbar = message => {
  openSnackbarFn(message);
};

export default Notification;
