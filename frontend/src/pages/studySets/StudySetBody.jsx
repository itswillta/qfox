import React from 'react';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import StudySetList from '../../components/StudySetList';
import emptyBackground from '/images/empty-background.svg';
import appRoutes from '../../routers/appRoutes';

const EmptyStudySet = () => (
  <Grid container justify="center" alignItems="center">
    <Grid item style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={emptyBackground} alt="empty" style={{ width: '80%', maxWidth: '800px' }} />
    </Grid>
  </Grid>
);

const StudySetBody = ({ history, classes, studySets, listTitle }) => {
  const redirectToCreateStudySet = () => {
    history.push(appRoutes.CreateStudySet.url);
  };

  if (!studySets.length) {
    return (
      <Grid className={classes.emptyContainer} container direction="column" justify="center" alignItems="center">
        <Grid item>
          <EmptyStudySet />
        </Grid>
        <Grid item style={{ marginTop: 24, marginBottom: 12 }}>
          <Typography variant="h6">
            You have no study sets
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={redirectToCreateStudySet} style={{ padding: '12px 20px' }}>Create a new one</Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <div className={classes.body}>
      <StudySetList studySets={studySets} listTitle={listTitle} />
    </div>
  );
};

export default withRouter(StudySetBody);
