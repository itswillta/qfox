import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
import ActionDropdown from '../../../../ActionDropdown';

const AccountMenu = ({ authState, requestLogout, classes }) => {
  const { t } = useTranslation();

  const logout = () => {
    requestLogout();
  };

  const buttonChildren = (
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
  );

  const dropdownDetails = {
    buttonProps: {
      className: classes.accountMenu
    },
    buttonChildren,
    dropdownItems: [
      {
        key: 'settings',
        children: (
          <React.Fragment>
            <ListItemIcon className={classes.accountMenuItemIcon}>
              <SettingsIcon />
            </ListItemIcon>
            <Link className={classes.link} to={appRoutes.Settings.url}>
              <ListItemText inset className={classes.accountMenuItemText}>
                {t('Settings')}
              </ListItemText>
            </Link>
          </React.Fragment>
        )
      },
      {
        key: 'logout',
        onClick: logout,
        children: (
          <React.Fragment>
            <ListItemIcon className={classes.accountMenuItemIcon}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText inset className={classes.accountMenuItemText}>
              {t('Log out')}
            </ListItemText>
          </React.Fragment>
        )
      }
    ]
  };

  return <ActionDropdown dropdownDetails={dropdownDetails} shouldShowArrow={false} />;
};

export default AccountMenu;
