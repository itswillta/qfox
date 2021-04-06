/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Answer = ({
  classes,
  questions,
  activeStep,
  userAnswer,
  correct,
  handleAnswer,
  handleSetActiveStep,
  terms,
  handleSetCorrect
}) => {
  const handleClickContinue = () => {
    handleAnswer(false);
    handleSetCorrect(false);
    if (activeStep >= terms.length - 1) {
      handleSetActiveStep(0);
    } else {
      handleSetActiveStep(activeStep + 1);
    }
  };

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      className={classes.learnContentItemGridContainer}
    >
      <Grid item>
        <Grid container direction="row" className={classes.answerHeader}>
          {correct ? (
            <Typography variant="h3" color="primary">
              Correct! Nicely done
            </Typography>
          ) : (
            <Typography variant="h3" color="error">
              Study this one!
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid item className={classes.answerBody}>
        {correct ? (
          <div>
            <Typography variant="body1" color="textSecondary">
              TERM
            </Typography>
            <Typography variant="h6">{terms[activeStep].term}</Typography>
            <Typography variant="body1" color="textSecondary">
              GOES WITH
            </Typography>
            <Typography variant="h6">{terms[activeStep].definition}</Typography>
          </div>
        ) : (
          <div>
            <Typography variant="body1" color="textSecondary">
              TERM
            </Typography>
            <Typography variant="h6">{terms[activeStep].term}</Typography>
            <Typography variant="body1" color="primary">
              CORRECT ANSWER
            </Typography>
            <Typography variant="h6">{terms[activeStep].definition}</Typography>
            <br />
            <Typography variant="body1" color="error">
              YOU SAID
            </Typography>
            <Typography variant="h6">{userAnswer.answer.definition}</Typography>
            <Typography variant="body1" color="textSecondary">
              GOES WITH
            </Typography>
            <Typography variant="h6">{userAnswer.answer.term}</Typography>
          </div>
        )}
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickContinue}
        >
          Continue
        </Button>
      </Grid>
    </Grid>
  );
};

export default Answer;
