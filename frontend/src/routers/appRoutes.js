/* eslint-disable import/prefer-default-export */
import LoadableRoute from '../hocs/LoadableRoute';

const appRoutes = {
  Welcome: {
    url: '/',
    component: LoadableRoute({
      loader: () => import('../pages/Welcome')
    }),
    pageTitle: 'Welcome – QFox',
    private: false
  },
  Main: {
    url: '/main',
    component: LoadableRoute({
      loader: () => import('../pages/Main')
    }),
    pageTitle: 'Main Page – QFox',
    private: false
  },
  Dashboard: {
    url: '/home',
    component: LoadableRoute({
      loader: () => import('../pages/Dashboard')
    }),
    pageTitle: 'Dashboard – QFox',
    private: true
  }
};

export default appRoutes;
