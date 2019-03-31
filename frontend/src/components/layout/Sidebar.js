import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import Hidden from '@material-ui/core/Hidden';

import SidebarSection from './sidebar/SidebarSection';
import SidebarDrawer from './sidebar/SidebarDrawer';
import useStyles from './sidebar/Sidebar.styles';
import sidebarSections from './sidebar/sidebarSections';

let openSidebarFn;

const Sidebar = ({ location: { pathname } }) => {
  const classes = useStyles();

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleDrawer = shouldOpen => () => {
    setIsMobileSidebarOpen(shouldOpen);
  };

  useEffect(() => {
    openSidebarFn = toggleDrawer(true);
  }, []);

  const SidebarItemList = () => (
    <div className={classes.sidebarItemList}>
      {sidebarSections.map((sidebarSection, index) => (
        <SidebarSection
          classes={classes}
          sidebarSection={sidebarSection}
          pathname={pathname}
          shouldHaveDivider={index < sidebarSections.length - 1}
          key={sidebarSection.sectionId}
        />
      ))}
    </div>
  );

  return (
    <React.Fragment>
      <Hidden smDown>
        <SidebarDrawer classes={classes} toggleDrawer={toggleDrawer}>
          <SidebarItemList />
        </SidebarDrawer>
      </Hidden>
      <Hidden mdUp>
        <SidebarDrawer
          classes={classes}
          isMobileSidebarOpen={isMobileSidebarOpen}
          toggleDrawer={toggleDrawer}
        >
          <SidebarItemList />
        </SidebarDrawer>
      </Hidden>
    </React.Fragment>
  );
};

export const openSidebar = () => {
  openSidebarFn();
};

export default withRouter(Sidebar);
