import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import emptyBackground from '/images/empty-background-2.svg';
import StudyClassList from './studyClassBody/StudyClassList';
import { openDialog } from '../../components/Dialogs';

const EmptyStudySet = () => (
  <Grid container justify="center" alignItems="center">
    <Grid item style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={emptyBackground} alt="empty" style={{ width: '75%', maxWidth: '800px' }} />
    </Grid>
  </Grid>
);


const StudyClassBody = ({ classes, studyClasses, listTitle }) => {
  const openCreateStudyClassDialog = () => {
    openDialog('upsertClass', 'create');
  };

  if (!studyClasses.length) {
    return (
      <Grid className={classes.emptyContainer} container direction="column" justify="center" alignItems="center">
        <Grid item>
          <EmptyStudySet />
        </Grid>
        <Grid item style={{ marginTop: 24, marginBottom: 12 }}>
          <Typography variant="h6">
            You have no study classes
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={openCreateStudyClassDialog} style={{ padding: '12px 20px' }}>Create a new one</Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <div className={classes.body}>
      <StudyClassList studyClasses={studyClasses} listTitle={listTitle} />
    </div>
  );
};

export default StudyClassBody;
