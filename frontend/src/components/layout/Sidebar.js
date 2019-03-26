import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import Hidden from '@material-ui/core/Hidden';

import SidebarItem from './sidebar/SidebarItem';
import SidebarDrawer from './sidebar/SidebarDrawer';
import useStyles from './sidebar/Sidebar.styles';
import sidebarSections from './sidebar/sidebarSections';

let openSidebarFn;

const Sidebar = props => {
  const classes = useStyles();

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const {
    location: { pathname }
  } = props;

  const toggleDrawer = shouldOpen => () => {
    setIsMobileSidebarOpen(shouldOpen);
  };

  useEffect(() => {
    openSidebarFn = toggleDrawer(true);
  }, []);

  const SidebarItemList = sidebarSections.map(sidebarSection => (
    <SidebarItem
      classes={classes}
      sidebarSection={sidebarSection}
      pathname={pathname}
      key={sidebarSection.sectionId}
    />
  ));

  return (
    <React.Fragment>
      <Hidden smDown>
        <SidebarDrawer classes={classes} toggleDrawer={toggleDrawer}>
          {SidebarItemList}
        </SidebarDrawer>
      </Hidden>
      <Hidden mdUp>
        <SidebarDrawer
          classes={classes}
          isMobileSidebarOpen={isMobileSidebarOpen}
          toggleDrawer={toggleDrawer}
        >
          {SidebarItemList}
        </SidebarDrawer>
      </Hidden>
    </React.Fragment>
  );
};

export const openSidebar = () => {
  openSidebarFn();
};

export default withRouter(Sidebar);
