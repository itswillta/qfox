import React from 'react';

import Grid from '@material-ui/core/Grid';

import StudySetCard from './studySetList/StudySetCard';
import useStyles from './studySetList/StudySetList.styles';

const StudySetList = ({ studySets }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2}>
      {studySets.map(studySet => (
        <Grid item key={studySet.id}>
          <StudySetCard classes={classes} studySet={studySet} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StudySetList;
