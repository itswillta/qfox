import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import appRoutes from '../../routers/appRoutes';

const UserCard = ({ classes, user, type }) => {
  const { t } = useTranslation();

  const getUserPath = useCallback(path => path.replace(':userId', user.id), [user.id]);

  const userPath = getUserPath(appRoutes.StudySets.url);

  return (
    <Paper square className={classes.card}>
      <Link className={classes.cardLink} to={userPath}>
        <div className={classes.clickableArea} />
      </Link>
      <Grid spacing={2} className={classes.contentArea} container alignItems="center">
        <Grid item>
          <Avatar
            alt={`${user.name}'s profile picture`}
            src={user.profilePictureUrl}
            className={classes.avatar}
          />
        </Grid>
        <Grid item>
          <Grid container direction="column">
            {type === 'classMembers' && user.role && (
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  {t(user.role)}
                </Typography>
              </Grid>
            )}
            <Grid item>
              <Typography variant="h5">{user.name}</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/*<Grid item className={classes.higherZIndex}>
          <StudySetActions classes={classes} handleDelete={handleDelete} handleEdit={handleEdit} />
        </Grid>*/}
      </Grid>
    </Paper>
  );
};

export default UserCard;
