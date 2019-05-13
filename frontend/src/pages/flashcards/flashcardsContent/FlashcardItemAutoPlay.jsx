import React from 'react';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import FlashcardItem from './FlashCardItem';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const FlashcardItemAutoPlay = ({
  activeStep,
  handleChangeStep,
  termsFake,
  classes,
  isFlipped,
  handleClickFlipped
}) => (
  <AutoPlaySwipeableViews
    index={activeStep}
    onChangeIndex={handleChangeStep}
    enableMouseEvents
  >
    {termsFake.map((step, index) => (
      <div key={step.label}>
        {Math.abs(activeStep - index) <= 2 ? (
          <FlashcardItem
            classes={classes}
            isFlipped={isFlipped}
            handleClickFlipped={handleClickFlipped}
            termsFake={termsFake}
            activeStep={activeStep}
          />
        ) : null}
      </div>
    ))}
  </AutoPlaySwipeableViews>
);

export default FlashcardItemAutoPlay;
