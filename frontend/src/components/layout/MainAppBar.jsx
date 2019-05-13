import React from 'react';
import { useRedux } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import useStyles from './mainAppBar/MainAppBar.styles';

import { authActions } from '../../states/auth';

import LogoAppBar from './mainAppBar/LogoAppBar';
import UserActionGroup from './mainAppBar/UserActionGroup';
import CreateButton from './mainAppBar/CreateButton';
import SearchBox from './mainAppBar/SearchBox';

const MainAppBar = ({ withoutSearchBar }) => {
  const classes = useStyles();

  const [authState, { requestLogout }] = useRedux(state => state.auth, {
    requestLogout: () => authActions.currentUser.logout()
  });

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <LogoAppBar />
          <Hidden smDown>
            {authState.isAuthenticated && <CreateButton classes={classes} />}
            <div className={classes.grow} />
            {!withoutSearchBar && <SearchBox classes={classes} />}
          </Hidden>
          <div className={classes.grow} />
          <UserActionGroup authState={authState} requestLogout={requestLogout} classes={classes} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainAppBar;
