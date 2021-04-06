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
  StudySet: {
    url: '/:userId/study-sets/:studySetId',
    component: LoadableRoute({
      loader: () => import('../pages/StudySet')
    }),
    pageTitle: 'Learn Study Set | QFox',
    private: true
  },
  EditStudySet: {
    url: '/:userId/study-sets/:studySetId/edit',
    component: LoadableRoute({
      loader: () => import('../pages/EditStudySet')
    }),
    pageTitle: 'Edit Study Set | QFox',
    private: true
  },
  CreateStudySet: {
    url: '/study-sets/create',
    component: LoadableRoute({
      loader: () => import('../pages/CreateStudySet')
    }),
    pageTitle: 'Create Study Set | QFox',
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
  StudyClasses: {
    url: '/:userId/study-classes',
    component: LoadableRoute({
      loader: () => import('../pages/StudyClasses')
    }),
    pageTitle: 'Classes | QFox',
    private: true
  },
  StudyClass: {
    url: '/:userId/study-classes/:studyClassId',
    component: LoadableRoute({
      loader: () => import('../pages/StudyClass')
    }),
    pageTitle: 'A Specific Class | QFox',
    private: true
  },
  Flashcards: {
    url: '/:userId/study-sets/:studySetId/flashcards',
    component: LoadableRoute({
      loader: () => import('../pages/Flashcards')
    }),
    pageTitle: 'Flashcards | QFox',
    private: true
  },
  Tests: {
    url: '/:userId/study-sets/:studySetId/test',
    component: LoadableRoute({
      loader: () => import('../pages/Tests')
    }),
    pageTitle: 'Tests | QFox',
    private: true
  },
  GameMatching: {
    url: '/matching',
    component: LoadableRoute({
      loader: () => import('../pages/GameMatching')
    }),
    pageTitle: 'Game | QFox',
    private: true
  },
  SearchStudySet: {
    url: '/study-sets/search',
    component: LoadableRoute({
      loader: () => import('../pages/StudySetSearch')
    }),
    pageTitle: 'Search | QFox',
    private: true
  },
  SearchUser: {
    url: '/users/search',
    component: LoadableRoute({
      loader: () => import('../pages/UserSearch')
    }),
    pageTitle: 'Search | QFox',
    private: true
  },
  SearchStudyClass: {
    url: '/study-classes/search',
    component: LoadableRoute({
      loader: () => import('../pages/StudyClassSearch')
    }),
    pageTitle: 'Search | QFox',
    private: true
  },
  Learn: {
    url: '/:userId/study-sets/:studySetId/learn',
    component: LoadableRoute({
      loader: () => import('../pages/Learn')
    }),
    pageTitle: 'Learn | QFox',
    private: true
  }
};

export default appRoutes;
