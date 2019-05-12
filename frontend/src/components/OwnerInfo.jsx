import React from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5)
  }
}));

const OwnerInfo = ({ owner }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item>
        <Avatar
          alt={`${owner.name}'s profile picture`}
          src={owner.profilePictureUrl}
          className={classes.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" color="primary">
          {owner.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OwnerInfo;
