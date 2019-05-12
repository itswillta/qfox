import React from 'react';
import { withRouter } from 'react-router';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import AddIcon from '@material-ui/icons/GroupAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import { redirectTo } from '../../../services/history';
import { openDialog } from '../../../components/Dialogs';

const StudySetHeaderButtons = ({ location: { pathname }, classes, studySet }) => {
  const { t } = useTranslation();

  const deleteStudySet = () => {
    openDialog('deleteStudySet', studySet);
  };

  const navigateToEditPage = () => redirectTo(`${pathname}/edit`);

  return (
    <Grid container spacing={1}>
      <Grid item>
        <Tooltip title={t('Edit study set')}>
          <Fab color="primary" className={classes.fab} size="small" onClick={navigateToEditPage}>
            <EditIcon />
          </Fab>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title={t('Copy shareable link')}>
          <Fab color="primary" className={classes.fab} size="small">
            <CopyToClipboard text={window.location.href}>
              <ShareIcon />
            </CopyToClipboard>
          </Fab>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title={t('Add this study set to a class')}>
          <Fab color="primary" className={classes.fab} size="small">
            <AddIcon />
          </Fab>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title={t('Delete study set')}>
          <Fab color="secondary" className={classes.fab} size="small" onClick={deleteStudySet}>
            <DeleteIcon />
          </Fab>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default withRouter(StudySetHeaderButtons);
