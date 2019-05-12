import React from 'react';
import { withRouter } from 'react-router';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const SidebarItem = ({ item, location: { pathname }, classes }) => {
  const { t } = useTranslation();

  const ItemIcon = item.icon;

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
        <ListItemIcon className={classes.listItemIcon}>
          <ItemIcon />
        </ListItemIcon>
        <ListItemText
          inset
          disableTypography
          className={
            item.specialText ? clsx(classes.listItemText, 'primary-text') : classes.listItemText
          }
        >
          <Typography color="inherit" variant="body2">
            {t(item.displayName)}
          </Typography>
        </ListItemText>
      </ListItem>
    </React.Fragment>
  );
};

export default withRouter(SidebarItem);
