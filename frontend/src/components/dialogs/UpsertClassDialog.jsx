import React from 'react';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import UpsertClassDialogTitle from './upsertClassDialog/UpsertClassDialogTitle';
import UpsertClassDialogForm from './upsertClassDialog/UpsertClassDialogForm';
import useStyles from './upsertClassDialog/upsertClassDialog.styles';
import useResponsiveDialog from '../../hooks/useResponsiveDialog';
import usePrivateDialog from '../../hooks/usePrivateDialog';

const UpsertClassDialog = ({ isOpen, toggleDialog, mode = 'edit', studyClass }) => {
  const classes = useStyles();

  const authState = useSelector(state => state.auth);

  const responsiveDialogProps = useResponsiveDialog();
  const privateDialogProps = usePrivateDialog(authState, toggleDialog);

  const handleCloseDialog = () => {
    toggleDialog(false)();
  };

  return (
    <Dialog fullWidth open={isOpen} {...responsiveDialogProps} {...privateDialogProps}>
      <UpsertClassDialogTitle classes={classes} handleCloseDialog={handleCloseDialog} mode={mode} />
      <UpsertClassDialogForm
        classes={classes}
        handleCloseDialog={handleCloseDialog}
        mode={mode}
        studyClass={studyClass}
      />
    </Dialog>
  );
};

export default UpsertClassDialog;
