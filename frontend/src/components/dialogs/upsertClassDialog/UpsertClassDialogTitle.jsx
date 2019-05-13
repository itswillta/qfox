import React from 'react';
import { useTranslation } from 'react-i18next';

import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const UpsertClassDialogTitle = ({ classes, handleCloseDialog, mode }) => {
  const { t } = useTranslation();

  return (
    <div className={classes.dialogTitle}>
      <DialogTitle>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <Typography className={classes.dialogTitleText} variant="h4">
              {t(mode === 'edit' ? 'Edit class' : 'Create a new class')}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton className={classes.closeDialogButton} onClick={handleCloseDialog}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
    </div>
  );
};

export default UpsertClassDialogTitle;
