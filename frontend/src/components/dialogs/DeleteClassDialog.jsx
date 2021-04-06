import React from 'react';
import { useSelector, useRedux } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';

import FormLoading from '../FormLoading';

import studyClassActions from '../../states/studyClasses/actions';
import useResponsiveDialog from '../../hooks/useResponsiveDialog';
import usePrivateDialog from '../../hooks/usePrivateDialog';

const DeleteStudyClassDialog = ({ isOpen, toggleDialog, studyClass }) => {
  const { t } = useTranslation();

  const authState = useSelector(state => state.auth);

  const [deleteAsyncStatus, { deleteStudyClass }] = useRedux(
    state => state.studyClassAsyncStatus.deleteStatus,
    {
      deleteStudyClass: (userId, studyClassId, closeDialog) =>
        studyClassActions.deleteForever.pending({ userId, studyClassId, closeDialog })
    }
  );

  const responsiveDialogProps = useResponsiveDialog();
  const publicDialogProps = usePrivateDialog(authState, toggleDialog);

  const handleDelete = () => {
    deleteStudyClass(studyClass.owner.id, studyClass.id, toggleDialog(false));
  };

  return (
    <Dialog open={isOpen} {...responsiveDialogProps} {...publicDialogProps}>
      <DialogTitle>{t('Delete this class?')}</DialogTitle>
      <DialogContent>
        <Typography variant="h4" className="bold-text uppercased-text margin-bottom">
          {studyClass.name}
        </Typography>
        <DialogContentText>
          {t(
            'You are about to delete this class and all of its data. No one will be able to access this class ever again.'
          )}
        </DialogContentText>
        <Typography variant="body1" className="bold-text">
          {t('Are you sure? This cannot be undone.')}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDialog(false)} color="primary">
          {t('Cancel')}
        </Button>
        <Button onClick={handleDelete} color="secondary" variant="contained">
          {t('Delete')}
        </Button>
      </DialogActions>
      {deleteAsyncStatus.isLoading && <FormLoading />}
    </Dialog>
  );
};

export default DeleteStudyClassDialog;
