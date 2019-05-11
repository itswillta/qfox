import React from 'react';
import { withRouter } from 'react-router';

import useStyles from './studySet/StudySet.styles';
import StudySetHeader from './studySet/StudySetHeader';
import StudySetBody from './studySet/StudySetBody';

const StudySet = ({ match }) => {
  const classes = useStyles();

  console.log(match.params.studySetId);

  return (
    <React.Fragment>
      <StudySetHeader classes={classes} />
      <StudySetBody classes={classes} />
    </React.Fragment>
  );
};

export default withRouter(StudySet);
