import React from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const StudySetOwner = ({ owner, classes }) => (
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

export default StudySetOwner;
