import React from 'react';

import { withRouter } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import People from '@material-ui/icons/People';

const StudyClassCard = ({ history, classes, studyClass }) => {
  const handleChooseClass = () => {
    history.push(`/study-classes/${studyClass.id}`);
  };

  return (
    <Paper square className={classes.card} onClick={handleChooseClass}>
      <div className={classes.clickableArea} />
      <Grid container direction="column">
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography variant="subtitle2">
                {studyClass.studySets.length}{' '}
                {studyClass.studySets.length > 1 ? 'study sets' : 'study set'}
              </Typography>
            </Grid>
            <Grid item className={classes.verticalDividerContainer}>
              <div className={classes.verticalDivider} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">
                {studyClass.members.length}{' '}
                {studyClass.members.length > 1 ? 'members' : 'member'}
              </Typography>
            </Grid>
            <Grid item className={classes.verticalDividerContainer}>
              <div className={classes.verticalDivider} />
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar
                    alt={`${studyClass.owner.name}'s profile picture`}
                    src={studyClass.profilePictureUrl}
                    className={classes.avatar}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" color="primary">
                    {studyClass.owner.name}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h5" className="bold-text">
            <People color="primary" className={classes.icon} fontSize="large" />
            {studyClass.title}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withRouter(StudyClassCard);
