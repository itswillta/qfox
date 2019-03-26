import React, { useState, useEffect } from 'react';
import Loadable from 'react-loadable';

import Loading from './RouteLoading';

const LoadableLoginDialog = Loadable({
  loader: () => import('./dialogs/LoginDialog'),
  loading: Loading
});

const openDialogFn = {};

const Dialogs = () => {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const toggleLoginDialog = shouldOpen => () => {
    setIsLoginDialogOpen(shouldOpen);
  };

  useEffect(() => {
    openDialogFn.login = toggleLoginDialog(true);
  }, []);

  return (
    <React.Fragment>
      {isLoginDialogOpen && (
        <LoadableLoginDialog isOpen={isLoginDialogOpen} toggleDialog={toggleLoginDialog} />
      )}
    </React.Fragment>
  );
};

export const openDialog = whichDialog => {
  openDialogFn[whichDialog]();
};

export default Dialogs;
