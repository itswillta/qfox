import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import appRoutes from '../routers/appRoutes';
import defaultAvatar from '/images/profile-default.jpg';

const useStyles = makeStyles(theme => ({
  container: {
    '&:hover': {
      '& $userName': {
        color: `${theme.palette.secondary.light} !important`,
        transition: 'color 0.2s ease-in-out'
      }
    }
  },
  userName: {},
  avatar: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5)
  }
}));

const OwnerInfo = ({ owner }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const getUserStudySetPath = useCallback(
    () => appRoutes.StudySets.url.replace(':userId', owner.id),
    [owner]
  );

  return (
    <Tooltip title={t('View the study sets of this user')}>
      <Link className="no-underline" to={getUserStudySetPath(owner)}>
        <Grid container spacing={1} className={classes.container}>
          <Grid item>
            <Avatar
              alt={`${owner.name}'s profile picture`}
              src={owner.profilePictureUrl || defaultAvatar}
              className={classes.avatar}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="primary" className={classes.userName}>
              {owner.name}
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </Tooltip>
  );
};

export default OwnerInfo;
