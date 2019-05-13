/* eslint-disable operator-linebreak */
import React from 'react';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Edit from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import Delete from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

import api from '../../../services/restClient';
import { redirectTo } from '../../../services/history';
import { openSnackbar } from '../../../components/Notification';

const isClassMember = (studyClass, userId) => {
  if (!studyClass || !studyClass.members) {
    return false;
  }

  const memberIds = studyClass.members.map(member => member.id);

  return memberIds.includes(userId);
};

const RightStudyClassItemHeader = ({
  classes,
  handleOpenDialogAddSet,
  handleOpenEditDialog,
  handleDelete,
  location: { pathname },
  studyClass
}) => {
  const { t } = useTranslation();

  const authState = useSelector(state => state.auth);

  const handleJoinClass = async () => {
    await api.custom(`users/${studyClass.owner.id}/classes/${studyClass.id}/members`).post({
      userId: authState.userProfile.id,
      role: 'member'
    });

    openSnackbar('You have successfully joined the class!');

    redirectTo(pathname);
  };

  const handleLeaveClass = async () => {
    await api.custom(`users/${studyClass.owner.id}/classes/${studyClass.id}/members`).delete('', {
      userIds: [authState.userProfile.id]
    });

    openSnackbar('You have successfully left the class.');

    redirectTo(pathname);
  };

  const isOwner = studyClass.owner && authState.userProfile.id === studyClass.owner.id;

  return (
    <Grid item>
      <Grid container spacing={1}>
        {isOwner && (
          <Grid item>
            <Tooltip title={t('Add sets')}>
              <Fab
                color="primary"
                size="small"
                className={classes.fab}
                onClick={handleOpenDialogAddSet}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </Grid>
        )}
        <Grid item>
          <Tooltip title={t('Copy shareable link')}>
            <CopyToClipboard text={window.location.href} className={classes.fab}>
              <Fab color="primary" size="small" className={classes.fab}>
                <ShareIcon />
              </Fab>
            </CopyToClipboard>
          </Tooltip>
        </Grid>
        {isOwner && (
          <Grid item>
            <Tooltip title={t('Edit')}>
              <Fab
                color="primary"
                size="small"
                className={classes.fab}
                onClick={handleOpenEditDialog}
              >
                <Edit />
              </Fab>
            </Tooltip>
          </Grid>
        )}
        {isOwner && (
          <Grid item>
            <Tooltip title={t('Delete')}>
              <Fab color="secondary" size="small" className={classes.fab} onClick={handleDelete}>
                <Delete />
              </Fab>
            </Tooltip>
          </Grid>
        )}
        {!isOwner && !isClassMember(studyClass, authState.userProfile.id) && (
          <Grid item>
            <Button color="primary" onClick={handleJoinClass} variant="contained">
              {t('Join class')}
            </Button>
          </Grid>
        )}
        {!isOwner && isClassMember(studyClass, authState.userProfile.id) && (
          <Grid item>
            <Button color="secondary" onClick={handleLeaveClass} variant="contained">
              {t('Leave class')}
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default withRouter(RightStudyClassItemHeader);
