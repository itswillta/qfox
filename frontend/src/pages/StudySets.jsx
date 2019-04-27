import React, { useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useRedux } from 'react-redux';

import useStyles from './studySets/StudySets.styles';

import { studySetActions, studySetSelector } from '../states/studySets';
import StudySetHeader from './studySets/StudySetHeader';
import StudySetBody from './studySets/StudySetBody';

const StudySets = ({ match }) => {
  const classes = useStyles();

  const [studySets, { fetchStudySets }] = useRedux(state => studySetSelector(state.ormDB), {
    fetchStudySets: userId => studySetActions.fetch.pending(userId)
  });

  useEffect(() => {
    fetchStudySets(match.params.userId);
  }, []);

  return (
    <div className={classes.root}>
      <StudySetHeader classes={classes} />
      <StudySetBody classes={classes} studySets={studySets} />
    </div>
  );
};

export default withRouter(StudySets);
