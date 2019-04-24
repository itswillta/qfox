import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import SidebarItem from './sidebarSection/SidebarItem';
import SidebarDynamicUserItem from './sidebarSection/SidebarDynamicUserItem';
import { DYNAMIC_ITEM_TYPES } from './dynamicItemTypes';

const SidebarSection = ({ classes, sidebarSection, shouldHaveDivider }) => {
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
        {sidebarSection.items.map(item => {
          const itemProps = {
            key: item.codeName,
            item,
            classes
          };

          if (item.dynamicItemType === DYNAMIC_ITEM_TYPES.USER) {
            return <SidebarDynamicUserItem {...itemProps} />;
          }

          return <SidebarItem {...itemProps} />;
        })}
      </List>
      {shouldHaveDivider && <Divider className={classes.divider} />}
    </React.Fragment>
  );
};

export default SidebarSection;
