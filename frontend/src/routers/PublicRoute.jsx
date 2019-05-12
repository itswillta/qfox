import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import appRoutes from './appRoutes';

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated || false);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Redirect to={appRoutes.Dashboard.url} /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
