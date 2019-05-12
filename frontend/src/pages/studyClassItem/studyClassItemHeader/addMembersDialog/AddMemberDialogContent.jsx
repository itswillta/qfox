import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import useStyle from './addMemberDialogContent/AddMembersDialogContent.style';

import UserDownshift from './addMemberDialogContent/UsersDownshift';

const AddMemberDialogContent = () => {
  const classes = useStyle();

  return (
    <DialogContent>
      <Grid className={classes.grid}>
        <Typography variant="subtitle1">
          Invite people to this class by entering their Quizlet username or email address.
        </Typography>
      </Grid>
      <Grid container direction="row" justify="space-between">
        <Grid item className={classes.gridTextField}>
          <UserDownshift classes={classes} />
        </Grid>
        <Grid item className={classes.grid}>
          <Button variant="contained" color="primary">
            Send
          </Button>
        </Grid>
      </Grid>
    </DialogContent>
  );
};

export default AddMemberDialogContent;
