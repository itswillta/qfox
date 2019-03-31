import React from 'react';

import AuthenticatedActions from './actionGroup/AuthenticatedActions';
import UnauthenticatedActions from './actionGroup/UnauthenticatedActions';

const ActionGroup = ({ authState, requestLogout, classes }) => {
  if (authState.isAuthenticated) {
    return (
      <AuthenticatedActions requestLogout={requestLogout} authState={authState} classes={classes} />
    );
  }

  return <UnauthenticatedActions classes={classes} />;
};

export default ActionGroup;
