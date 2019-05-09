import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import EditStudyClassDialogTitle from './editStudyClassDialog/EditStudyClassDialogTitle';
import EditStudyClassDialogContent from './editStudyClassDialog/EditStudyClassDialogContent';

const EditStudyClassDialog = ({
  classes,
  openDialogEdit,
  handleCloseDialogEdit,
  permission
}) => (
  <Dialog fullWidth open={openDialogEdit} onClose={handleCloseDialogEdit}>
    <EditStudyClassDialogTitle
      classes={classes}
      handleCloseDialogEdit={handleCloseDialogEdit}
    />
    <EditStudyClassDialogContent classes={classes} permission={permission} />
  </Dialog>
);

export default EditStudyClassDialog;
