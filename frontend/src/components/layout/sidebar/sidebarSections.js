import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ClassIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import StudySetsIcon from '@material-ui/icons/ViewAgenda';

import appRoutes from '../../../routers/appRoutes';

export default [
  {
    sectionId: 'overview',
    sectionDisplayName: '',
    items: [
      {
        path: appRoutes.Dashboard.url,
        codeName: 'dashboard',
        displayName: 'Dashboard',
        icon: () => <DashboardIcon />
      },
      {
        path: appRoutes.StudySets.url,
        codeName: 'studySets',
        displayName: 'Your Study Sets',
        icon: () => <StudySetsIcon />
      },
      {
        path: appRoutes.Settings.url,
        codeName: 'settings',
        displayName: 'Settings',
        icon: () => <SettingsIcon />
      }
    ]
  },
  {
    sectionId: 'classes',
    sectionDisplayName: 'YOUR CLASSES',
    items: [
      {
        path: appRoutes.Class.url,
        codeName: 'class',
        displayName: 'Class A',
        icon: () => <ClassIcon />
      }
    ]
  }
];
