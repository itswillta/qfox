import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import AddMemberDialogTitle from './addMembersDialog/AddMemberDialogTitle';
import AddMemberDialogContent from './addMembersDialog/AddMemberDialogContent';

const AddMembersDialog = ({
  classes,
  openDialogAddMember,
  handleCloseDialogAddMember
}) => (
  <Dialog
    fullWidth
    open={openDialogAddMember}
    onClose={handleCloseDialogAddMember}
  >
    <AddMemberDialogTitle
      classes={classes}
      handleCloseDialogAddMember={handleCloseDialogAddMember}
    />
    <AddMemberDialogContent />
  </Dialog>
);

export default AddMembersDialog;
