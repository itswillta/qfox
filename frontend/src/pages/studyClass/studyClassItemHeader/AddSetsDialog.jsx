import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import AddSetDialogTitle from './addSetsDialog/AddSetDialogTitle';
import AddSetDialogContent from './addSetsDialog/AddSetDialogContent';

const AddSetsDialog = ({ classes, studyClass, openDialogAddSet, handleCloseDialogAddSet }) => (
  <Dialog fullWidth open={openDialogAddSet} onClose={handleCloseDialogAddSet}>
    <AddSetDialogTitle classes={classes} handleCloseDialogAddSet={handleCloseDialogAddSet} />
    <AddSetDialogContent classes={classes} studyClass={studyClass} />
  </Dialog>
);

export default AddSetsDialog;
