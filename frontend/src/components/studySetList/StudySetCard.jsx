import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import VerticalDivider from './studySetCard/VerticalDivider';
import StudySetOwner from './studySetCard/StudySetOwner';
import StudySetActions from './studySetCard/StudySetActions';

const StudySetCard = ({ classes, studySet }) => (
  <Paper square className={classes.card}>
    <Grid container alignItems="center" justify="space-between">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Grid container>
              <Grid item>
                <Typography variant="subtitle2">
                  {studySet.totalTerms} {studySet.totalTerms > 1 ? 'terms' : 'term'}
                </Typography>
              </Grid>
              <VerticalDivider />
              <Grid item>
                <StudySetOwner classes={classes} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5" className="bold-text">
              {studySet.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <StudySetActions />
      </Grid>
    </Grid>
  </Paper>
);

export default StudySetCard;
