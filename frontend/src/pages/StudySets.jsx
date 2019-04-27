import React, { useEffect } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import useStyles from './studySets/StudySets.styles';

import { studySetActions, studySetSelector } from '../states/studySets';
import StudySetHeader from './studySets/StudySetHeader';
import StudySetBody from './studySets/StudySetBody';

const StudySets = ({ studySets, fetchStudySets, match }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchStudySets(match.params.userId);
  }, [fetchStudySets, match]);

  return (
    <div className={classes.root}>
      <StudySetHeader classes={classes} />
      <StudySetBody classes={classes} studySets={studySets} />
    </div>
  );
};

const mapStateToProps = state => ({
  studySets: studySetSelector(state.ormDB)
});

const mapDispatchToProps = dispatch => ({
  fetchStudySets: userId => dispatch(studySetActions.fetch.pending(userId))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(StudySets);
