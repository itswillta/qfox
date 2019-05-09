import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const EditStudyClassDialogContent = ({ classes, permission }) => (
  <DialogContent>
    <TextField
      className={classes.dialogContentTextField}
      fullWidth
      value="class name"
      helperText="STUDY CLASS NAME"
    />
    <TextField
      className={classes.dialogContentTextField}
      fullWidth
      placeholder="Enter a discription (optional)"
      helperText="DESCRIPTION"
    />
    <FormControlLabel
      className={classes.dialogContentTextField}
      control={<Checkbox checked={permission === 'allow'} color="primary" />}
      label="Allow other members to add sets and new members."
    />
    <Button
      className={classes.dialogContentTextField}
      variant="contained"
      color="primary"
      fullWidth
    >
      Save
    </Button>
  </DialogContent>
);

export default EditStudyClassDialogContent;
