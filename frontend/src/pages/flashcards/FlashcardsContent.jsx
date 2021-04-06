import React, { useState } from 'react';

import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import FlashcardItem from './flashcardsContent/FlashCardItem';
import FlashcardItemAutoPlay from './flashcardsContent/FlashcardItemAutoPlay';

const FlashcardsContent = ({
  classes,
  terms,
  maxSteps,
  activeStep,
  handleNext,
  handleBack,
  answer,
  handleChangeStep,
  autoPlay
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClickFlipped = () => setIsFlipped(!isFlipped);

  return (
    <div className={classes.flashcards}>
      {autoPlay ? (
        <FlashcardItemAutoPlay
          activeStep={activeStep}
          handleChangeStep={handleChangeStep}
          terms={terms}
          classes={classes}
          isFlipped={isFlipped}
          handleClickFlipped={handleClickFlipped}
        />
      ) : (
        <FlashcardItem
          classes={classes}
          isFlipped={isFlipped}
          handleClickFlipped={handleClickFlipped}
          terms={terms}
          activeStep={activeStep}
          answer={answer}
        />
      )}

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
