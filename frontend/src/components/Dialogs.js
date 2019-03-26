import React, { useState, useEffect } from 'react';
import Loadable from 'react-loadable';

import Loading from './RouteLoading';

const LoadableLoginDialog = Loadable({
  loader: () => import('./dialogs/LoginDialog'),
  loading: Loading
});
const LoadableRegisterDialog = Loadable({
  loader: () => import('./dialogs/RegisterDialog'),
  loading: Loading
});

const openDialogFn = {};

const Dialogs = () => {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);

  const toggleLoginDialog = shouldOpen => () => {
    setIsLoginDialogOpen(shouldOpen);
  };

  const toggleRegisterDialog = shouldOpen => () => {
    setIsRegisterDialogOpen(shouldOpen);
  };

  useEffect(() => {
    openDialogFn.login = toggleLoginDialog(true);
    openDialogFn.register = toggleRegisterDialog(true);
  }, []);

  return (
    <React.Fragment>
      {isLoginDialogOpen && (
        <LoadableLoginDialog
          isOpen={isLoginDialogOpen}
          toggleDialog={toggleLoginDialog}
        />
      )}
      {isRegisterDialogOpen && (
        <LoadableRegisterDialog
          isOpen={isRegisterDialogOpen}
          toggleDialog={toggleRegisterDialog}
        />
      )}
    </React.Fragment>
  );
};

export const openDialog = whichDialog => {
  openDialogFn[whichDialog]();
};

export default Dialogs;
