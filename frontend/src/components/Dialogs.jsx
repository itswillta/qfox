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

const LoadableDeleteStudySetDialog = Loadable({
  loader: () => import('./dialogs/DeleteStudySetDialog'),
  loading: Loading
});

const openDialogFn = {};

const Dialogs = () => {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const [isDeleteStudySetDialogOpen, setIsDeleteStudySetDialogOpen] = useState(false);
  const [studySetToDelete, setStudySetToDelete] = useState({});

  const toggleLoginDialog = shouldOpen => () => {
    setIsLoginDialogOpen(shouldOpen);
  };

  const toggleRegisterDialog = shouldOpen => () => {
    setIsRegisterDialogOpen(shouldOpen);
  };

  const toggleDeleteStudySetDialog = shouldOpen => params => {
    setIsDeleteStudySetDialogOpen(shouldOpen);

    if (shouldOpen) {
      const [studySet] = params;
      setStudySetToDelete(studySet);
    }
  };

  useEffect(() => {
    openDialogFn.login = toggleLoginDialog(true);
    openDialogFn.register = toggleRegisterDialog(true);
    openDialogFn.deleteStudySet = toggleDeleteStudySetDialog(true);
  }, []);

  return (
    <React.Fragment>
      {isLoginDialogOpen && (
        <LoadableLoginDialog isOpen={isLoginDialogOpen} toggleDialog={toggleLoginDialog} />
      )}
      {isRegisterDialogOpen && (
        <LoadableRegisterDialog isOpen={isRegisterDialogOpen} toggleDialog={toggleRegisterDialog} />
      )}
      {isDeleteStudySetDialogOpen && (
        <LoadableDeleteStudySetDialog
          isOpen={isDeleteStudySetDialogOpen}
          toggleDialog={toggleDeleteStudySetDialog}
          studySet={studySetToDelete}
        />
      )}
    </React.Fragment>
  );
};

export const openDialog = (whichDialog, ...params) => {
  openDialogFn[whichDialog](params);
};

export default Dialogs;
