/* eslint-disable operator-linebreak */
/* eslint-disable no-shadow */
import React from 'react';

import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Grid from '@material-ui/core/Grid';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const FlashcardsContent = ({
  classes,
  termsFake,
  maxSteps,
  activeStep,
  handleNext,
  handleBack,
  answer,
  handleChangeStep,
  autoPlay
}) => {
  const BothDisplay = () => (
    <Grid
      container
      direction="column"
      justify="space-around"
      className={classes.gridContainerBoth}
    >
      <Grid item>{termsFake[activeStep].term}</Grid>
      <hr className={classes.hr} />
      <Grid item>{termsFake[activeStep].definition}</Grid>
    </Grid>
  );

  const FlashcardItem = () => (
    <div className={classes.flashcardItem}>
      {(answer === 'en' && termsFake[activeStep].term) ||
        (answer === 'vi' && termsFake[activeStep].definition) ||
        (answer === 'both' && <BothDisplay />)}
    </div>
  );

  const FlashcardItemAutoPlay = () => (
    <AutoPlaySwipeableViews
      index={activeStep}
      onChangeIndex={handleChangeStep}
      enableMouseEvents
    >
      {termsFake.map((step, index) => (
        <div key={step.label}>
          {Math.abs(activeStep - index) <= 2 ? <FlashcardItem /> : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  );

  return (
    <div className={classes.flashcards}>
      {autoPlay ? <FlashcardItemAutoPlay /> : <FlashcardItem />}

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
};

export default FlashcardsContent;
