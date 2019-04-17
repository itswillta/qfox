import React from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import defaultProfilePicture from '/images/profile-default.jpg';

const StudySetOwner = ({ classes }) => (
  <Grid container spacing={1}>
    <Grid item>
      <Avatar alt="Remy Sharp" src={defaultProfilePicture} className={classes.avatar} />
    </Grid>
    <Grid item>
      <Typography variant="subtitle2" color="primary">
        John Doe
      </Typography>
    </Grid>
  </Grid>
);

export default StudySetOwner;
