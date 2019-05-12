import React from 'react';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import AddIcon from '@material-ui/icons/GroupAdd';
import DeleteIcon from '@material-ui/icons/Delete';

const StudySetHeaderButtons = ({ classes }) => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={1}>
      <Grid item>
        <Tooltip title={t('Edit study set')}>
          <Fab color="primary" className={classes.fab} size="small">
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
          <Fab color="secondary" className={classes.fab} size="small">
            <DeleteIcon />
          </Fab>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default StudySetHeaderButtons;
