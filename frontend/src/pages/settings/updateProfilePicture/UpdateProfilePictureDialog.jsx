import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

const ProfilePictureEditor = ({
  classes,
  profilePictureData,
  handleSubmitProfilePicture,
  handleResetFileSelected
}) => {
  const [open, setOpen] = useState(true);
  const [editor, setEditor] = useState(null);
  const [scale, setScale] = useState(1);

  const handleClose = () => {
    setOpen(false);
    handleResetFileSelected();
  };

  const setEditorRef = newEditor => {
    if (newEditor) setEditor(newEditor);
  };

  const handleScale = e => {
    setScale(parseFloat(e.target.value));
  };

  const handleSubmit = () => {
    handleSubmitProfilePicture(editor.getImageScaledToCanvas().toDataURL());
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Edit Profile Picture</DialogTitle>
        <DialogContent>
          <AvatarEditor
            ref={setEditorRef}
            image={profilePictureData}
            width={250}
            height={250}
            border={50}
            scale={parseFloat(scale)}
          />
          <br />
          <input
            name="scale"
            type="range"
            onChange={handleScale}
            min="0.1"
            max="2"
            step="0.01"
            defaultValue="1"
            className={classes.scale}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} type="reset" color="primary">
            Cancle
          </Button>
          <Button type="submit" color="primary" variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ProfilePictureEditor;
