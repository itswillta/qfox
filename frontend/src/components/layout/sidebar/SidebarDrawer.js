import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Clear';

import logoAppbar from '/images/logo-appbar.svg';

const SidebarDrawer = props => {
  const { classes, isMobileSidebarOpen, toggleDrawer, children } = props;

  const isMobileDrawer = typeof isMobileSidebarOpen !== 'undefined';

  let MobileSidebarAppBar = null;

  if (isMobileSidebarOpen) {
    MobileSidebarAppBar = () => (
      <AppBar position="static">
        <Toolbar>
          <img src={logoAppbar} alt="QFox" height="36px" />
          <div className={classes.grow} />
          <IconButton color="inherit" onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant={isMobileDrawer ? 'temporary' : 'permanent'}
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
        open={isMobileDrawer ? isMobileSidebarOpen : true}
        onClose={toggleDrawer(false)}
        transitionDuration={0}
      >
        {isMobileSidebarOpen && <MobileSidebarAppBar />}
        {children}
      </Drawer>
    </React.Fragment>
  );
};

export default SidebarDrawer;
