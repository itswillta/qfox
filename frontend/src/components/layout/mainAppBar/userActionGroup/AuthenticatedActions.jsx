import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

import { openSidebar } from '../../Sidebar';

import AccountMenu from './authenticatedActions/AccountMenu';

const AuthenticatedActions = ({ authState, requestLogout, classes }) => (
  <React.Fragment>
    <Hidden smDown>
      <AccountMenu authState={authState} requestLogout={requestLogout} classes={classes} />
    </Hidden>
    <Hidden mdUp>
      <IconButton color="inherit" onClick={openSidebar}>
        <MenuIcon />
      </IconButton>
    </Hidden>
  </React.Fragment>
);

export default AuthenticatedActions;
