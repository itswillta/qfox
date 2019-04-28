import React from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import MoreIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';

import ActionDropdown from '../../ActionDropdown';

const StudySetActions = ({ classes }) => {
  const dropdownDetails = {
    buttonProps: {},
    buttonChildren: <MoreIcon />,
    dropdownItems: [
      {
        key: 'delete',
        children: (
          <React.Fragment>
            <ListItemIcon className={classes.listItemIcon}>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItemText} inset disableTypography>
              <Typography color="inherit" variant="body1">
                Delete
              </Typography>
            </ListItemText>
          </React.Fragment>
        )
      }
    ]
  };
  return <ActionDropdown dropdownDetails={dropdownDetails} isIconButton />;
};

export default StudySetActions;
