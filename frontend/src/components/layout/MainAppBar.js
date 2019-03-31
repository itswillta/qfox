import React from 'react';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './mainAppBar/MainAppBar.styles';

import { authActions } from '../../services/auth';

import logoAppbar from '/images/logo-appbar.svg';
import ActionGroup from './mainAppBar/ActionGroup';

const MainAppBar = ({ authState, requestLogout }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img src={logoAppbar} alt="QFox" height="36px" />
          <div className={classes.grow} />
          <ActionGroup authState={authState} requestLogout={requestLogout} classes={classes} />
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
