import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import VerticalDivider from '../../components/VerticalDivider';
import OwnerInfo from '../../components/OwnerInfo';
import StudySetHeaderButtons from './StudySetHeader/StudySetHeaderButtons';

const StudySetHeader = ({ classes, studySet }) => (
  <div className={classes.header}>
    <Grid container direction="column" spacing={1}>
      {studySet.terms && (
        <Grid item>
          <Grid container alignItems="center">
            <Grid item>
              <Typography variant="subtitle2">
                {studySet.terms.length} {studySet.terms.length > 1 ? 'terms' : 'term'}
              </Typography>
            </Grid>
            <VerticalDivider />
            <Grid item>
              <OwnerInfo classes={classes} owner={studySet.owner} />
            </Grid>
            <Grid item className="flex-grow">
              <Grid container justify="flex-end">
                <Grid item>
                  <StudySetHeaderButtons classes={classes} studySet={studySet} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid item>
        <Typography variant="h3" className="uppercased-text bold-text">
          {studySet.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" className="bold-text">
          not added to any class
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default StudySetHeader;
