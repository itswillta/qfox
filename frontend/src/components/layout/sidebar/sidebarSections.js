import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ClassIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import StudySetsIcon from '@material-ui/icons/ViewAgenda';
import CreateStudySetIcon from '@material-ui/icons/AddToPhotos';
import CreateStudyClassIcon from '@material-ui/icons/GroupAdd';
import SearchIcon from '@material-ui/icons/Search';

import appRoutes from '../../../routers/appRoutes';
import { DYNAMIC_ITEM_TYPES } from './dynamicItemTypes';
import { openDialog } from '../../Dialogs';

export default [
  {
    sectionId: 'overview',
    sectionDisplayName: '',
    items: [
      {
        path: appRoutes.Settings.url,
        codeName: 'settings',
        displayName: 'Settings',
        icon: () => <SettingsIcon />
      },
      {
        path: appRoutes.SearchUser.url,
        codeName: 'searchUsers',
        displayName: 'Search Users',
        icon: () => <SearchIcon />
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
      },
      {
        path: appRoutes.SearchStudySet.url,
        codeName: 'searchStudySets',
        displayName: 'Search Study Sets',
        icon: () => <SearchIcon />
      }
    ]
  },
  {
    sectionId: 'classes',
    sectionDisplayName: 'STUDY CLASSES',
    items: [
      {
        path: appRoutes.StudyClasses.url,
        dynamicItemType: DYNAMIC_ITEM_TYPES.USER,
        codeName: 'class',
        displayName: 'Your Classes',
        icon: () => <ClassIcon />
      },
      {
        onClick: () => openDialog('upsertClass', 'create'),
        codeName: 'createStudyClass',
        displayName: 'Create a new class',
        icon: () => <CreateStudyClassIcon />,
        specialText: true
      },
      {
        path: appRoutes.SearchStudyClass.url,
        codeName: 'searchStudyClasses',
        displayName: 'Search Classes',
        icon: () => <SearchIcon />
      }
    ]
  }
];
