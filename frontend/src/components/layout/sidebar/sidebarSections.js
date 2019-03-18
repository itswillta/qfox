import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';

import appRoutes from '../../../routers/appRoutes';

export default [
  {
    sectionId: 'overview',
    sectionDisplayName: 'OVERVIEW',
    items: [
      {
        path: appRoutes.Dashboard.url,
        codeName: 'dashboard',
        displayName: 'Dashboard',
        icon: () => <DashboardIcon />
      }
    ]
  }
];
