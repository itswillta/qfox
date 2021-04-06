import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import People from '@material-ui/icons/People';
import OwnerInfo from '../../../../components/OwnerInfo';
import VerticalDivider from '../../../../components/VerticalDivider';
import appRoutes from '../../../../routers/appRoutes';

const StudyClassCard = ({ classes, studyClass }) => {
  const getStudyClassPath = useCallback(
    path => path.replace(':userId', studyClass.owner.id).replace(':studyClassId', studyClass.id),
    [studyClass.id, studyClass.owner.id]
  );

  const studyClassPath = getStudyClassPath(appRoutes.StudyClass.url);

  return (
    <Paper square className={classes.card}>
      <Link className={classes.cardLink} to={studyClassPath}>
        <div className={classes.clickableArea} />
      </Link>
      <Grid container direction="column">
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography variant="subtitle2">
                {studyClass.totalStudySets || '0'}{' '}
                {studyClass.totalStudySets > 1 ? 'study sets' : 'study set'}
              </Typography>
            </Grid>
            <VerticalDivider />
            <Grid item>
              <Typography variant="subtitle2">
                {studyClass.totalMembers || '0'}{' '}
                {studyClass.totalMembers > 1 ? 'members' : 'member'}
              </Typography>
            </Grid>
            <VerticalDivider />
            <Grid item className={classes.higherZIndex}>
              <OwnerInfo owner={studyClass.owner} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.infoSection}>
          <Grid container alignItems="center">
            <Grid item className={classes.cardIcon}>
              <People color="primary" className={classes.icon} fontSize="large" />
            </Grid>
            <Grid item>
              <Typography variant="h5" className="bold-text">
                {studyClass.name}
              </Typography>
            </Grid>
            {studyClass.description && (
              <React.Fragment>
                <VerticalDivider />
                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    {studyClass.description}
                  </Typography>
                </Grid>
              </React.Fragment>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StudyClassCard;
