import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import VerticalDivider from '../VerticalDivider';
import OwnerInfo from '../OwnerInfo';
import StudySetActions from './studySetCard/StudySetActions';
import appRoutes from '../../routers/appRoutes';

const StudySetCard = ({ classes, studySet }) => {
  const getStudySetPath = useCallback(
    path => path.replace(':userId', studySet.owner.id).replace(':studySetId', studySet.id),
    [studySet.id, studySet.owner.id]
  );

  return (
    <Link className={classes.cardLink} to={getStudySetPath(appRoutes.StudySet.url)}>
      <Paper square className={classes.card}>
        <div className={classes.clickableArea} />
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
                    <OwnerInfo classes={classes} owner={studySet.owner} />
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
            <StudySetActions classes={classes} />
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};

export default StudySetCard;
