import React, { useState, useEffect } from 'react';
import { useRedux } from 'react-redux';
import { withRouter } from 'react-router';

import Grid from '@material-ui/core/Grid';

import useStyles from './flashcards/Flashcards.style';

import FlashcardsControls from './flashcards/FlashcardsControls';
import FlashcardsContent from './flashcards/FlashcardsContent';

import { fullStudySetActions } from '../states/fullStudySet';

const Flashcards = ({ match }) => {
  const classes = useStyles();

  const { userId, studySetId } = match.params;

  const [studySet, { fetchStudySet }] = useRedux(
    state => state.currentStudySet.studySet,
    {
      fetchStudySet: () =>
        fullStudySetActions.fetchStudySet.pending({ userId, studySetId })
    }
  );

  useEffect(() => {
    fetchStudySet();
  }, []);

  const [activeStep, setActiveStep] = useState(0);
  const [answer, setAnswer] = useState('both');
  const [autoPlay, setAutoPlay] = useState(false);

  const maxSteps = studySet.id ? studySet.terms.length : 0;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);
  const handleChangeStep = value => setActiveStep(value);
  const handleChangeAnswer = value => setAnswer(value);
  const handleChangeAutoPlay = () => setAutoPlay(!autoPlay);

  return (
    <Grid container direction="row">
      <Grid item xs={9}>
        {studySet.id && (
          <FlashcardsContent
            classes={classes}
            terms={studySet.terms}
            activeStep={activeStep}
            maxSteps={maxSteps}
            handleNext={handleNext}
            handleBack={handleBack}
            answer={answer}
            handleChangeStep={handleChangeStep}
            autoPlay={autoPlay}
          />
        )}
      </Grid>
      <Grid item xs={3}>
        <FlashcardsControls
          classes={classes}
          activeStep={activeStep}
          maxSteps={maxSteps}
          answer={answer}
          handleChangeAnswer={handleChangeAnswer}
          handleChangeAutoPlay={handleChangeAutoPlay}
        />
      </Grid>
    </Grid>
  );
};

export default withRouter(Flashcards);
