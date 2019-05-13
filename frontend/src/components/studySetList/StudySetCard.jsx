import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import VerticalDivider from '../VerticalDivider';
import OwnerInfo from '../OwnerInfo';
import StudySetActions from './studySetCard/StudySetActions';
import appRoutes from '../../routers/appRoutes';
import { openDialog } from '../Dialogs';
import { redirectTo } from '../../services/history';

const StudySetCard = ({
  classes,
  studySet,
  type,
  handleRemoveFromClass,
  handleAddToClass,
  isInClass
}) => {
  const getStudySetPath = useCallback(
    path => path.replace(':userId', studySet.owner.id).replace(':studySetId', studySet.id),
    [studySet.id, studySet.owner.id]
  );

  const studySetPath = getStudySetPath(appRoutes.StudySet.url);

  const handleEdit = () => {
    redirectTo(`${studySetPath}/edit`);
  };

  const handleDelete = () => {
    openDialog('deleteStudySet', studySet);
  };

  return (
    <Paper square className={classes.card}>
      <Link className={classes.cardLink} to={studySetPath}>
        <div className={classes.clickableArea} />
      </Link>
      <Grid className={classes.contentArea} container alignItems="center" justify="space-between">
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
                <Grid item className={classes.higherZIndex}>
                  <OwnerInfo owner={studySet.owner} />
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
        <Grid item className={classes.higherZIndex}>
          <StudySetActions
            classes={classes}
            handleDelete={handleDelete}
            handleRemoveFromClass={handleRemoveFromClass}
            handleAddToClass={handleAddToClass}
            isInClass={isInClass}
            handleEdit={handleEdit}
            studySetPath={studySetPath}
            studySetId={studySet.id}
            type={type}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StudySetCard;
