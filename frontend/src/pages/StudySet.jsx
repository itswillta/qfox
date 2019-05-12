import React, { useEffect } from 'react';
import { useRedux } from 'react-redux';
import { withRouter } from 'react-router';

import useStyles from './studySet/StudySet.styles';
import StudySetHeader from './studySet/StudySetHeader';
import StudySetBody from './studySet/StudySetBody';
import { fullStudySetActions } from '../states/fullStudySet';

const StudySet = ({ match }) => {
  const classes = useStyles();

  const { userId, studySetId } = match.params;

  const [studySet, { fetchStudySet }] = useRedux(state => state.currentStudySet.studySet, {
    fetchStudySet: () => fullStudySetActions.fetchStudySet.pending({ userId, studySetId })
  });

  useEffect(() => {
    fetchStudySet();
  }, []);

  console.log(studySet);

  return (
    <React.Fragment>
      <StudySetHeader classes={classes} studySet={studySet} />
      <StudySetBody classes={classes} studySet={studySet} />
    </React.Fragment>
  );
};

export default withRouter(StudySet);
