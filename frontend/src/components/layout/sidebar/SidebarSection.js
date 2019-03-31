import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import SidebarItem from './sidebarSection/SidebarItem';

const SidebarSection = ({ classes, sidebarSection, pathname, shouldHaveDivider }) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {sidebarSection.sectionDisplayName && (
        <div className={classes.section}>
          <Typography variant="body2" className={classes.sectionName}>
            {t(sidebarSection.sectionDisplayName)}
          </Typography>
        </div>
      )}
      <List className={classnames(classes.list, classes.verticalCompact)}>
        {sidebarSection.items.map(item => (
          <SidebarItem key={item.codeName} pathname={pathname} item={item} classes={classes} />
        ))}
      </List>
      {shouldHaveDivider && <Divider className={classes.divider} />}
    </React.Fragment>
  );
};

export default SidebarSection;
