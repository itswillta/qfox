import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

const AddSetDialogTitle = ({ classes, handleCloseDialogAddSet }) => (
  <div className={classes.dialogTitle}>
    <DialogTitle>
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Typography className={classes.dialogTitleText} variant="h4">
            Add a set
          </Typography>
        </Grid>
        <Grid item>
          <Fab
            size="small"
            color="primary"
            aria-label="Close"
            className={classes.fab}
            onClick={handleCloseDialogAddSet}
          >
            <CloseIcon />
          </Fab>
        </Grid>
      </Grid>
    </DialogTitle>
  </div>
);

export default AddSetDialogTitle;
