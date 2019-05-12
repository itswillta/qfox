import React, { useEffect } from 'react';
import { useRedux } from 'react-redux';
import { withRouter } from 'react-router';

import StudySetEditor from '../components/StudySetEditor';
import { fullStudySetActions } from '../states/fullStudySet';

const EditStudySet = ({ match }) => {
  const { userId, studySetId } = match.params;

  const [studySet, { fetchStudySet }] = useRedux(state => state.currentStudySet.studySet, {
    fetchStudySet: () => fullStudySetActions.fetchStudySet.pending({ userId, studySetId })
  });

  useEffect(() => {
    fetchStudySet();
  }, []);

  return studySet && <StudySetEditor mode="edit" studySet={studySet} />;
};

export default withRouter(EditStudySet);
