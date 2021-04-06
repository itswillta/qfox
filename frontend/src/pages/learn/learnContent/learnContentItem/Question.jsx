/* eslint-disable no-unused-vars */
/* eslint-disable operator-assignment */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useRedux, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { userTermActions } from '../../../../states/userTerm';

const Question = ({
  classes,
  questions,
  activeStep,
  terms,
  answersChoice,
  handleAnswer,
  handleSetCorrect,
  handleSetUserAnswer,
  handleSetQuestions,
  handleChangeFamiliar,
  handleSetQuestionsMaster,
  handleChangeMasteres
}) => {
  const authState = useSelector(state => state.auth);

  const [userTermAsyncStatus, { updateUserTerm }] = useRedux(
    state => state.userAsyncStatus,
    {
      updateUserTerm: ({ userId, termId, updateFields }) =>
        userTermActions.updateUserTerm.pending({ userId, termId, updateFields })
    }
  );

  const handleClickAnswer = answer => {
    handleAnswer(true);
    if (terms[activeStep].term === answer.term) {
      handleSetCorrect(true);

      updateUserTerm({
        userId: authState.userProfile.id,
        termId: terms[activeStep].id,
        updateFields: { correct: 1 }
      });

      if (terms[activeStep].check) {
        handleSetQuestionsMaster(activeStep, true);
      }
      handleSetQuestions(activeStep, true);
    } else {
      handleSetUserAnswer(answer);
      updateUserTerm({
        userId: authState.userProfile.id,
        termId: terms[activeStep].id,
        updateFields: { missed: 1 }
      });
    }
    let count = 0;
    let countMaster = 0;
    terms.forEach(element => {
      if (element.check) {
        count = count + 1;
      }
      if (element.check2) {
        countMaster = countMaster + 1;
      }
    });
    handleChangeFamiliar(count);
    handleChangeMasteres(countMaster);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="space-around"
      className={classes.learnContentItemGridContainer}
    >
      <Grid item>
        <Typography variant="h3">{terms[activeStep].term}</Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row">
          {terms.length < 3
            ? answersChoice.map(answer => (
                <Grid item key={answer.id}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.learnContentButtonAnswer}
                    onClick={() => handleClickAnswer(answer)}
                  >
                    {answer.definition}
                  </Button>
                </Grid>
              ))
            : answersChoice
                .filter(value => value !== terms[activeStep])
                .slice(0, 2)
                .concat(terms[activeStep])
                .map(answer => (
                  <Grid item key={answer.id}>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.learnContentButtonAnswer}
                      onClick={() => handleClickAnswer(answer)}
                    >
                      {answer.definition}
                    </Button>
                  </Grid>
                ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Question;
