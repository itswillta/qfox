import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const SidebarItem = props => {
  const { t } = useTranslation();

  const { classes, sidebarSection, pathname } = props;

  return (
    <React.Fragment>
      <div className={classes.section}>
        <Typography variant="body2" className={classes.sectionName}>
          {t(sidebarSection.sectionDisplayName)}
        </Typography>
      </div>
      <List className={classnames(classes.list, classes.verticalCompact)}>
        {sidebarSection.items.map(item => (
          <React.Fragment key={item.codeName}>
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
                <Typography className={classes.listItemText} variant="body2">
                  {item.displayName}
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
};

export default SidebarItem;
