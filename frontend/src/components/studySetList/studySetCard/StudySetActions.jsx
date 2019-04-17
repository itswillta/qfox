import React from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MoreIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';

import ActionDropdown from '../../ActionDropdown';

const StudySetActions = () => {
  const dropdownDetails = {
    buttonProps: {},
    buttonChildren: <MoreIcon />,
    dropdownItems: [
      {
        key: 'delete',
        children: (
          <React.Fragment>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText inset>Delete</ListItemText>
          </React.Fragment>
        )
      }
    ]
  };
  return <ActionDropdown dropdownDetails={dropdownDetails} isIconButton />;
};

export default StudySetActions;
