import React, { useState, useEffect } from 'react';
import Loadable from 'react-loadable';

import Loading from './RouteLoading';

const LoadableDeleteStudySetDialog = Loadable({
  loader: () => import('./dialogs/DeleteStudySetDialog'),
  loading: Loading
});

const LoadableUpsertClassDialog = Loadable({
  loader: () => import('./dialogs/UpsertClassDialog'),
  loading: Loading
});

const LoadableDeleteClassDialog = Loadable({
  loader: () => import('./dialogs/DeleteClassDialog'),
  loading: Loading
});

const openDialogFn = {};

const Dialogs = () => {
  const [isDeleteStudySetDialogOpen, setIsDeleteStudySetDialogOpen] = useState(false);
  const [studySetToDelete, setStudySetToDelete] = useState({});

  const [isUpsertClassDialogOpen, setIsUpsertClassDialogOpen] = useState(false);
  const [studyClassToEdit, setStudyClassToEdit] = useState({});
  const [upsertClassMode, setUpsertClassMode] = useState('edit');

  const [isDeleteClassDialogOpen, setIsDeleteClassDialogOpen] = useState(false);
  const [studyClassToDelete, setStudyClassToDelete] = useState({});

  const toggleDeleteStudySetDialog = shouldOpen => params => {
    setIsDeleteStudySetDialogOpen(shouldOpen);

    if (shouldOpen) {
      const [studySet] = params;
      setStudySetToDelete(studySet);
    }
  };

  const toggleUpsertClassDialog = shouldOpen => params => {
    setIsUpsertClassDialogOpen(shouldOpen);

    if (!shouldOpen) {
      return;
    }

    const mode = params[0];

    if (mode === 'create') {
      setUpsertClassMode('create');

      return;
    }

    const studyClass = params[1];

    setStudyClassToEdit(studyClass);
    setUpsertClassMode('edit');
  };

  const toggleDeleteClassDialog = shouldOpen => params => {
    setIsDeleteClassDialogOpen(shouldOpen);

    if (shouldOpen) {
      const [studyClass] = params;
      setStudyClassToDelete(studyClass);
    }
  };

  useEffect(() => {
    openDialogFn.deleteStudySet = toggleDeleteStudySetDialog(true);
    openDialogFn.upsertClass = toggleUpsertClassDialog(true);
    openDialogFn.deleteClass = toggleDeleteClassDialog(true);
  }, []);

  return (
    <React.Fragment>
      {isDeleteStudySetDialogOpen && (
        <LoadableDeleteStudySetDialog
          isOpen={isDeleteStudySetDialogOpen}
          toggleDialog={toggleDeleteStudySetDialog}
          studySet={studySetToDelete}
        />
      )}
      {isUpsertClassDialogOpen && (
        <LoadableUpsertClassDialog
          isOpen={isUpsertClassDialogOpen}
          toggleDialog={toggleUpsertClassDialog}
          studyClass={studyClassToEdit}
          mode={upsertClassMode}
        />
      )}
      {isDeleteClassDialogOpen && (
        <LoadableDeleteClassDialog
          isOpen={isDeleteClassDialogOpen}
          toggleDialog={toggleDeleteClassDialog}
          studyClass={studyClassToDelete}
        />
      )}
    </React.Fragment>
  );
};

export const openDialog = (whichDialog, ...params) => {
  openDialogFn[whichDialog](params);
};

export default Dialogs;
