import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import SettingsIcon from '@material-ui/icons/Settings';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';

import appRoutes from '../../../../../routers/appRoutes';

import defaultProfilePicture from '/images/profile-default.jpg';

const MenuListComposition = ({ authState, requestLogout, classes }) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const anchorEl = useRef(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = event => {
    if (anchorEl.current && anchorEl.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const logout = () => {
    requestLogout();
  };

  return (
    <React.Fragment>
      <Button
        buttonRef={anchorEl}
        onClick={handleToggle}
        variant="text"
        color="inherit"
        disableRipple
        className={classes.accountMenu}
      >
        <Grid container direction="row" alignItems="center" spacing={1}>
          <Grid item>
            <Avatar
              alt="Profile Picture"
              src={authState.userProfile.profilePictureUrl || defaultProfilePicture}
            />
          </Grid>
          <Grid item>
            <Typography variant="body1" color="inherit">
              {authState.userProfile.name || 'Anonymous'}
            </Typography>
          </Grid>
          <Grid item className={classes.accountMenuExpand}>
            <ArrowDropDown />
          </Grid>
        </Grid>
      </Button>
      <Popper open={open} anchorEl={anchorEl.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.accountMenuItemIcon}>
                      <SettingsIcon />
                    </ListItemIcon>
                    <Link className={classes.link} to={appRoutes.Settings.url}>
                      <ListItemText inset className={classes.accountMenuItemText}>
                        {t('Settings')}
                      </ListItemText>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={logout}>
                    <ListItemIcon className={classes.accountMenuItemIcon}>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText inset className={classes.accountMenuItemText}>
                      {t('Log out')}
                    </ListItemText>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default MenuListComposition;
