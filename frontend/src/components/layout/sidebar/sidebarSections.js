import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ClassIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import StudySetsIcon from '@material-ui/icons/ViewAgenda';
import CreateStudySetIcon from '@material-ui/icons/AddToPhotos';

import appRoutes from '../../../routers/appRoutes';
import { DYNAMIC_ITEM_TYPES } from './dynamicItemTypes';

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
        path: appRoutes.Settings.url,
        codeName: 'settings',
        displayName: 'Settings',
        icon: () => <SettingsIcon />
      }
    ]
  },
  {
    sectionId: 'studySets',
    sectionDisplayName: 'STUDY SETS',
    items: [
      {
        path: appRoutes.StudySets.url,
        dynamicItemType: DYNAMIC_ITEM_TYPES.USER,
        codeName: 'studySets',
        displayName: 'Your Study Sets',
        icon: () => <StudySetsIcon />
      },
      {
        path: appRoutes.CreateStudySet.url,
        codeName: 'createStudySets',
        displayName: 'Create a new study set',
        icon: () => <CreateStudySetIcon />,
        specialText: true
      }
    ]
  },
  {
    sectionId: 'classes',
    sectionDisplayName: 'YOUR CLASSES',
    items: [
      {
        path: appRoutes.StudyClass.url,
        codeName: 'class',
        displayName: 'Class A',
        icon: () => <ClassIcon />
      }
    ]
  }
];
