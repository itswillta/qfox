import React from 'react';

import AuthenticatedActions from './userActionGroup/AuthenticatedActions';
import UnauthenticatedActions from './userActionGroup/UnauthenticatedActions';

const UserActionGroup = ({ authState, requestLogout, classes }) => {
  if (authState.isAuthenticated) {
    return (
      <AuthenticatedActions requestLogout={requestLogout} authState={authState} classes={classes} />
    );
  }

  return <UnauthenticatedActions classes={classes} />;
};

export default UserActionGroup;
