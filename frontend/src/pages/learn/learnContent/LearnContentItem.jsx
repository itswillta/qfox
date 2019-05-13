/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useState } from 'react';
import { useRedux, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Question from './learnContentItem/Question';
import Answer from './learnContentItem/Answer';

import { userTermActions } from '../../../states/userTerm';

const LearnContentItem = ({
  classes,
  terms,
  questions,
  activeStep,
  handleSetActiveStep,
  handleSetQuestions,
  handleChangeFamiliar,
  handleSetQuestionsMaster,
  handleChangeMasteres,
  answered,
  correct,
  handleSetCorrect,
  handleAnswer,
  handleSetUserAnswer,
  userAnswer,
  mastered
}) => {
  const [answersChoice, setAnswersChoice] = useState(
    [...terms].sort(() => 0.5 - Math.random())
  );

  const authState = useSelector(state => state.auth);

  const [userTermAsyncStatus, { updateUserTerm }] = useRedux(
    state => state.userAsyncStatus,
    {
      updateUserTerm: ({ userId, termId, updateFields }) =>
        userTermActions.updateUserTerm.pending({ userId, termId, updateFields })
    }
  );

  const handleStartOver = () => {
    handleChangeFamiliar(0);
    handleChangeMasteres(0);
    handleAnswer(false);
    terms.forEach((element, index) => {
      handleSetQuestions(index, false);
      handleSetQuestionsMaster(index, false);
      updateUserTerm({
        userId: authState.userProfile.id,
        termId: element.id,
        updateFields: { reset: 1 }
      });
    });
  };

  return (
    <div>
      {mastered === 4 ? (
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.learnContentItemGridContainer}
        >
          <Grid item>
            <Typography variant="h5">
              Congratulations! You are learnt everything!
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartOver}
            >
              Start over
            </Button>
          </Grid>
        </Grid>
      ) : !answered ? (
        <Question
          classes={classes}
          questions={questions}
          activeStep={activeStep}
          terms={terms}
          answersChoice={answersChoice}
          handleAnswer={handleAnswer}
          handleSetCorrect={handleSetCorrect}
          handleSetUserAnswer={handleSetUserAnswer}
          handleSetQuestions={handleSetQuestions}
          handleChangeFamiliar={handleChangeFamiliar}
          handleSetQuestionsMaster={handleSetQuestionsMaster}
          handleChangeMasteres={handleChangeMasteres}
        />
      ) : (
        <Answer
          classes={classes}
          questions={questions}
          activeStep={activeStep}
          userAnswer={userAnswer}
          correct={correct}
          handleAnswer={handleAnswer}
          handleSetActiveStep={handleSetActiveStep}
          terms={terms}
          handleSetCorrect={handleSetCorrect}
        />
      )}
    </div>
  );
};

export default LearnContentItem;
