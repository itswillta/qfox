import React from 'react';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Edit from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import Delete from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const RightStudyClassItemHeader = ({
  classes,
  handleOpenDialogAddSet,
  handleOpenEditDialog,
  handleDelete
}) => {
  const { t } = useTranslation();

  return (
    <Grid item>
      <Grid container spacing={1}>
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
        <Grid item>
          <Tooltip title={t('Copy shareable link')}>
            <CopyToClipboard text={window.location.href} className={classes.fab}>
              <Fab color="primary" size="small" className={classes.fab}>
                <ShareIcon />
              </Fab>
            </CopyToClipboard>
          </Tooltip>
        </Grid>
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
        <Grid item>
          <Tooltip title={t('Delete')}>
            <Fab color="secondary" size="small" className={classes.fab} onClick={handleDelete}>
              <Delete />
            </Fab>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RightStudyClassItemHeader;
