import React from 'react';
import { connect } from 'react-redux';

import useStyles from './settings/Settings.styles';

import UpdateProfilePicture from './settings/UpdateProfilePicture';
import UpdateName from './settings/UpdateName';
import UpdateLanguage from './settings/UpdateLanguage';

const Settings = ({ authState }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <UpdateProfilePicture authState={authState} classes={classes} />
      <UpdateName authState={authState} classes={classes} />
      <UpdateLanguage authState={authState} classes={classes} />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  authState: state.auth
});

export default connect(mapStateToProps)(Settings);
