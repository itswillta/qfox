import React from 'react';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import useStyles from './mainAppBar/MainAppBar.styles';

import { authActions } from '../../states/auth';

import LogoAppBar from './mainAppBar/LogoAppBar';
import UserActionGroup from './mainAppBar/UserActionGroup';
import CreateButton from './mainAppBar/CreateButton';
import SearchBox from './mainAppBar/SearchBox';

const MainAppBar = ({ authState, requestLogout }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <LogoAppBar />
          <Hidden smDown>
            {authState.isAuthenticated && <CreateButton classes={classes} />}
            <div className={classes.grow} />
            <SearchBox classes={classes} />
          </Hidden>
          <div className={classes.grow} />
          <UserActionGroup authState={authState} requestLogout={requestLogout} classes={classes} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({
  authState: state.auth
});

const mapDispatchToProps = dispatch => ({
  requestLogout: () => dispatch(authActions.currentUser.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainAppBar);
