/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import LoadableRoute from './LoadableRoute';

const appRoutes = {
  Welcome: {
    url: '/',
    component: LoadableRoute({
      loader: () => import('../pages/Welcome')
    }),
    pageTitle: 'Welcome | QFox',
    private: false
  },
  Main: {
    url: '/main',
    component: LoadableRoute({
      loader: () => import('../pages/Main')
    }),
    pageTitle: 'Main Page | QFox',
    private: false
  },
  Dashboard: {
    url: '/dashboard',
    component: LoadableRoute({
      loader: () => import('../pages/Dashboard')
    }),
    pageTitle: 'Dashboard | QFox',
    private: true
  },
  StudySets: {
    url: '/:userId/study-sets',
    component: LoadableRoute({
      loader: () => import('../pages/StudySets')
    }),
    pageTitle: 'Study Sets | QFox',
    private: true
  },
  CreateStudySet: {
    url: '/study-sets/create',
    component: LoadableRoute({
      loader: () => import('../pages/CreateStudySet')
    }),
    pageTitle: 'Create a new study set | QFox',
    private: true
  },
  Settings: {
    url: '/settings',
    component: LoadableRoute({
      loader: () => import('../pages/Settings')
    }),
    pageTitle: 'Settings | QFox',
    private: true
  },
  StudyClass: {
    url: '/classes/:id',
    component: LoadableRoute({
      loader: () => import('../pages/StudyClass')
    }),
    pageTitle: 'Your Class | QFox',
    private: true
  }
};

export default appRoutes;
