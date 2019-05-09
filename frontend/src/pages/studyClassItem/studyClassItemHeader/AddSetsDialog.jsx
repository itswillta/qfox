import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import AddSetDialogTitle from './addSetsDialog/AddSetDialogTitle';
import AddSetDialogContent from './addSetsDialog/AddSetDialogContent';

const AddSetsDialog = ({
  classes,
  openDialogAddSet,
  handleCloseDialogAddSet
}) => (
  <Dialog fullWidth open={openDialogAddSet} onClose={handleCloseDialogAddSet}>
    <AddSetDialogTitle
      classes={classes}
      handleCloseDialogAddSet={handleCloseDialogAddSet}
    />
    <AddSetDialogContent classes={classes} />
  </Dialog>
);

export default AddSetsDialog;
