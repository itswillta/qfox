import React from 'react';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

import useStyles from './mainAppBar/MainAppBar.styles';
import { openSidebar } from './Sidebar';
import { openDialog } from '../Dialogs';

import { authActions, authHelpers } from '../../services/auth';

import logoAppbar from '/images/logo-appbar.svg';

const MainAppBar = props => {
  const { authState, history, requestLogout } = props;

  const classes = useStyles();
  const { t } = useTranslation();

  const logout = () => {
    authHelpers.cleanUpToken();
    requestLogout();
    history.push('/main');
  };

  let RightGroup = () => (
    <React.Fragment>
      <Button color="inherit" onClick={() => openDialog('login')}>
        {t('Log in')}
      </Button>
      <Button className={clsx(classes.signUpButton, 'button-secondary')} variant="contained">
        {t('Sign up')}
      </Button>
    </React.Fragment>
  );

  if (authState.isAuthenticated) {
    RightGroup = () => (
      <React.Fragment>
        <Button color="inherit" onClick={logout}>
          {t('Log out')}
        </Button>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img src={logoAppbar} alt="QFox" height="36px" />
          <div className={classes.grow} />
          <RightGroup />
          <Hidden mdUp>
            <IconButton color="inherit" onClick={openSidebar}>
              <MenuIcon />
            </IconButton>
          </Hidden>
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

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MainAppBar);
