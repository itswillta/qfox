import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const SidebarItem = ({ item, pathname, classes }) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ListItem
        button
        className={classes.listItem}
        classes={{
          selected: classes.selected
        }}
        component={!(item.path === pathname) ? Link : null}
        to={item.path}
        selected={item.path === pathname}
      >
        <ListItemIcon className={classes.listItemIcon}>{item.icon()}</ListItemIcon>
        <ListItemText inset disableTypography>
          <Typography
            className={
              item.specialText ? clsx(classes.listItemText, 'primary-text') : classes.listItemText
            }
            variant="body2"
          >
            {t(item.displayName)}
          </Typography>
        </ListItemText>
      </ListItem>
    </React.Fragment>
  );
};

export default SidebarItem;
