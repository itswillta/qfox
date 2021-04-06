import React, { useState, useEffect } from 'react';
import { useRedux } from 'react-redux';
import { withRouter } from 'react-router';

import Grid from '@material-ui/core/Grid';

import useStyles from './learn/Learn.style';

import LearnContent from './learn/LearnContent';
import LearnControl from './learn/LearnControl';

import { fullStudySetActions } from '../states/fullStudySet';
import { userTermActions } from '../states/userTerm';

const Learn = ({ match }) => {
  const classes = useStyles();

  const { userId, studySetId } = match.params;

  const [studySet, { fetchStudySet }] = useRedux(
    state => state.currentStudySet.studySet,
    {
      fetchStudySet: () =>
        fullStudySetActions.fetchStudySet.pending({ userId, studySetId })
    }
  );

  const [userTerm, { fetchUserTerm }] = useRedux(
    state => state.userTermAsyncStatus.userTerm,
    {
      fetchUserTerm: () => userTermActions.fetchUserTerm.pending({ userId })
    }
  );

  useEffect(() => {
    fetchStudySet();
    fetchUserTerm();
  }, []);

  const [remaining, setRemaining] = useState(0);
  const [familiar, setFamiliar] = useState(0);
  const [mastered, setMastered] = useState(0);

  const handleChangeRemaining = value => setRemaining(value);
  const handleChangeFamiliar = value => setFamiliar(value);
  const handleChangeMasteres = value => setMastered(value);

  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [userAnswer, setUserAnswer] = useState({ answer: 'ahuhu' });

  const handleSetCorrect = value => setCorrect(value);
  const handleAnswer = value => setAnswered(value);
  const handleSetUserAnswer = value => {
    userAnswer.answer = value;
    setUserAnswer(userAnswer);
  };

  return (
    <Grid container direction="row">
      <Grid item xs={9}>
        {studySet.id && (
          <LearnContent
            classes={classes}
            terms={studySet.terms}
            userTerm={userTerm}
            handleChangeFamiliar={handleChangeFamiliar}
            handleChangeMasteres={handleChangeMasteres}
            answered={answered}
            correct={correct}
            handleSetCorrect={handleSetCorrect}
            handleAnswer={handleAnswer}
            handleSetUserAnswer={handleSetUserAnswer}
            userAnswer={userAnswer}
            mastered={mastered}
          />
        )}
      </Grid>
      <Grid item xs={3}>
        {studySet.id && (
          <LearnControl
            classes={classes}
            terms={studySet.terms}
            remaining={remaining}
            familiar={familiar}
            mastered={mastered}
            handleChangeRemaining={handleChangeRemaining}
            handleChangeFamiliar={handleChangeFamiliar}
            handleChangeMasteres={handleChangeMasteres}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default withRouter(Learn);
