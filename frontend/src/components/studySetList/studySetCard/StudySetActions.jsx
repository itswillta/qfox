import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import MoreIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import ActionDropdown from '../../ActionDropdown';

const StudySetActions = ({ classes, handleDelete, handleEdit }) => {
  const { t } = useTranslation();

  const dropdownDetails = {
    buttonProps: {},
    buttonChildren: <MoreIcon />,
    dropdownItems: [
      {
        key: 'edit',
        onClick: handleEdit,
        children: (
          <React.Fragment>
            <ListItemIcon className={classes.listItemIcon}>
              <EditIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItemText} inset disableTypography>
              <Typography color="action" variant="body1">
                {t('Edit')}
              </Typography>
            </ListItemText>
          </React.Fragment>
        )
      },
      {
        key: 'delete',
        onClick: handleDelete,
        children: (
          <React.Fragment>
            <ListItemIcon className={classnames(classes.listItemIcon, classes.deleteColor)}>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText
              className={classnames(classes.listItemText, classes.deleteColor)}
              inset
              disableTypography
            >
              <Typography color="inherit" variant="body1">
                {t('Delete')}
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
