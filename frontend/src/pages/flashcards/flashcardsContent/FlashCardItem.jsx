/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import ReactCardFlip from 'react-card-flip';

import Grid from '@material-ui/core/Grid';

const FlashCardItem = ({
  classes,
  isFlipped,
  handleClickFlipped,
  terms,
  activeStep,
  answer
}) => (
  <div>
    {answer === 'both' ? (
      <div className={classes.flashcardItem}>
        <Grid
          container
          direction="column"
          justify="space-around"
          className={classes.gridContainerBoth}
        >
          <Grid item>{terms[activeStep].term}</Grid>
          <hr className={classes.hr} />
          <Grid item>{terms[activeStep].definition}</Grid>
        </Grid>
      </div>
    ) : (
      <ReactCardFlip isFlipped={isFlipped}>
        <div
          key="front"
          className={classes.flashcardItem}
          onClick={handleClickFlipped}
        >
          {terms[activeStep].term}
        </div>
        <div
          key="back"
          className={classes.flashcardItem}
          onClick={handleClickFlipped}
        >
          {terms[activeStep].definition}
        </div>
      </ReactCardFlip>
    )}
  </div>
);

export default FlashCardItem;
