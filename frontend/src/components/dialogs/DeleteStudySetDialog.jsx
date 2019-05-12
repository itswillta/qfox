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

import studySetActions from '../../states/studySets/actions';
import useResponsiveDialog from '../../hooks/useResponsiveDialog';
import usePrivateDialog from '../../hooks/usePrivateDialog';

const DeleteStudySetDialog = ({ isOpen, toggleDialog, studySet }) => {
  const { t } = useTranslation();

  const authState = useSelector(state => state.auth);

  const [deleteAsyncStatus, { deleteStudySet }] = useRedux(
    state => state.studySetAsyncStatus.deleteStatus,
    {
      deleteStudySet: (userId, studySetId, closeDialog) =>
        studySetActions.deleteForever.pending({ userId, studySetId, closeDialog })
    }
  );

  const responsiveDialogProps = useResponsiveDialog();
  const publicDialogProps = usePrivateDialog(authState, toggleDialog);

  const handleDelete = () => {
    deleteStudySet(studySet.owner.id, studySet.id, toggleDialog(false));
  };

  return (
    <Dialog open={isOpen} {...responsiveDialogProps} {...publicDialogProps}>
      <DialogTitle>{t('Delete this study set?')}</DialogTitle>
      <DialogContent>
        <Typography variant="h4" className="bold-text uppercased-text margin-bottom">
          {studySet.title}
        </Typography>
        <DialogContentText>
          {t(
            'You are about to delete this set and all of its data. No one will be able to access this set ever again.'
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

export default DeleteStudySetDialog;
