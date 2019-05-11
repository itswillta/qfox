import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import useStyles from './flashcards/Flashcards.style';

import FlashcardsControls from './flashcards/FlashcardsControls';
import FlashcardsContent from './flashcards/FlashcardsContent';

const termsFake = [
  {
    id: 1,
    term: 'angry',
    definition: 'tức giận'
  },
  {
    id: 1,
    term: 'happy',
    definition: 'hạnh phúc'
  }
];

const Flashcards = () => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [answer, setAnswer] = useState('en');
  const [autoPlay, setAutoPlay] = useState(false);

  const maxSteps = termsFake.length;

  const handleNext = () => setActiveStep(activeStep + 1);

  const handleBack = () => setActiveStep(activeStep - 1);

  const handleChangeStep = value => setActiveStep(value);

  const handleChangeAnswer = value => setAnswer(value);

  const handleChangeAutoPlay = () => setAutoPlay(!autoPlay);

  return (
    <Grid container direction="row">
      <Grid item xs={9}>
        <FlashcardsContent
          classes={classes}
          termsFake={termsFake}
          activeStep={activeStep}
          maxSteps={maxSteps}
          handleNext={handleNext}
          handleBack={handleBack}
          answer={answer}
          handleChangeStep={handleChangeStep}
          autoPlay={autoPlay}
        />
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

export default Flashcards;
