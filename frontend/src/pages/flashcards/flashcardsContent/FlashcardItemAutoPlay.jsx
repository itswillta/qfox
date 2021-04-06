import React from 'react';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import FlashcardItem from './FlashCardItem';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const FlashcardItemAutoPlay = ({
  activeStep,
  handleChangeStep,
  terms,
  classes,
  isFlipped,
  handleClickFlipped
}) => (
  <AutoPlaySwipeableViews
    index={activeStep}
    onChangeIndex={handleChangeStep}
    enableMouseEvents
  >
    {terms.map((step, index) => (
      <div key={step.label}>
        {Math.abs(activeStep - index) <= 2 ? (
          <FlashcardItem
            classes={classes}
            isFlipped={isFlipped}
            handleClickFlipped={handleClickFlipped}
            terms={terms}
            activeStep={activeStep}
          />
        ) : null}
      </div>
    ))}
  </AutoPlaySwipeableViews>
);

export default FlashcardItemAutoPlay;
