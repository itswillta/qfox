import React from 'react';

import Grid from '@material-ui/core/Grid';

import useStyles from './studyClassList/StudyClassList.styles';

import StudyClassCard from './studyClassList/StudyClassCard';

const StudyClassList = ({ studyClasses }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {studyClasses.map(studyClass => (
        <Grid item key={studyClass.id}>
          <StudyClassCard classes={classes} studyClass={studyClass} />
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default StudyClassList;
