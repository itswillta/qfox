import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';

const EditStudyClassDialogTitle = ({ classes, handleCloseDialogEdit }) => (
  <div className={classes.dialogTitle}>
    <DialogTitle>
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Typography className={classes.dialogTitleText} variant="h4">
            Edit class
          </Typography>
        </Grid>
        <Grid item>
          <Fab
            size="small"
            color="primary"
            aria-label="Close"
            className={classes.fab}
            onClick={handleCloseDialogEdit}
          >
            <CloseIcon />
          </Fab>
        </Grid>
      </Grid>
    </DialogTitle>
  </div>
);

export default EditStudyClassDialogTitle;
