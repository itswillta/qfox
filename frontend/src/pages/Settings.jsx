import React from 'react';
import { useSelector } from 'react-redux';

import useStyles from './settings/Settings.styles';

import UpdateProfilePicture from './settings/UpdateProfilePicture';
import UpdateName from './settings/UpdateName';
import UpdateLanguage from './settings/UpdateLanguage';
import UpdatePassword from './settings/UpdatePassword';

const Settings = () => {
  const classes = useStyles();

  const authState = useSelector(state => state.auth);

  return (
    <React.Fragment>
      <UpdateProfilePicture authState={authState} classes={classes} />
      <UpdateName authState={authState} classes={classes} />
      <UpdateLanguage authState={authState} classes={classes} />
      <UpdatePassword authState={authState} classes={classes} />
    </React.Fragment>
  );
};

export default Settings;
