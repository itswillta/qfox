import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import appRoutes from './appRoutes';

const PublicRoute = ({ component: Component, ...rest }) => {
  const authState = useSelector(state => state.auth);

  const isAuthenticated = authState.isAuthenticated || false;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Redirect to={appRoutes.StudySets.url.replace(':userId', authState.userProfile.id)} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
