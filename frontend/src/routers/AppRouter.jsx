import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import withHelmet from '../hocs/withHelmet';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import appRoutes from './appRoutes';

const history = createBrowserHistory();

const AppLayout = () => {
  const privateRoutes = Object.keys(appRoutes).filter(route => appRoutes[route].private);

  return (
    <Layout>
      <Switch>
        {privateRoutes.map(privateRoute => (
          <PrivateRoute
            path={appRoutes[privateRoute].url}
            component={withHelmet(
              appRoutes[privateRoute].component,
              appRoutes[privateRoute].pageTitle
            )}
            exact
            key={appRoutes[privateRoute].url}
          />
        ))}
        <Redirect to="/404" />
      </Switch>
    </Layout>
  );
};

const AppRouter = () => {
  const publicRoutes = Object.keys(appRoutes).filter(route => !appRoutes[route].private);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/404" exact component={NotFound} />
        {publicRoutes.map(publicRoute => (
          <PublicRoute
            path={appRoutes[publicRoute].url}
            component={withHelmet(
              appRoutes[publicRoute].component,
              appRoutes[publicRoute].pageTitle
            )}
            exact
            key={appRoutes[publicRoute].url}
          />
        ))}
        <PrivateRoute component={AppLayout} />
      </Switch>
    </Router>
  );
};

export { history };

export default AppRouter;
