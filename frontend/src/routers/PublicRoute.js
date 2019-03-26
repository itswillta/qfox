import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import appRoutes from './appRoutes';

const PublicRoute = ({ isAuthenticated = false, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Redirect to={appRoutes.Dashboard.url} /> : <Component {...props} />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PublicRoute);
