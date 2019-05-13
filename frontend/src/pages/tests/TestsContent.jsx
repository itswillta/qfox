import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import WrittenQuestions from './testsContent/WrittenQuestions';
import MatchingQuestions from './testsContent/MatchingQuestions';
import MultipeChoiceQuestions from './testsContent/MultipleChoiceQuestions';
import TrueFalseQuestions from './testsContent/TrueFalseQuestions';

const TestsContent = ({
  classes,
  terms,
  written,
  matching,
  multipleChoice,
  trueFalse,
  checkAnswer,
  handleCheckAnswer,
  totalQuestionTypes,
  addGrade,
  handleChangeWritten,
  handleChangeMatching,
  handleChangeMultipleChoice,
  handleChangeTrueFalse
}) => {
  const handleSetWrittenGrade = value => {
    addGrade(value);
  };
  const handleSetMatchingGrade = value => {
    addGrade(value);
  };
  const handleSetMultipileChoiceGrade = value => {
    addGrade(value);
  };
  const handleSetTrueFalseGrade = value => {
    addGrade(value);
  };

  let writtenTermDisplay = [...terms];
  let matchingTermDisplay = [...terms];
  let multipleChoiceTermDisplay = [...terms];
  let trueFalseTermDisplay = [...terms];

  const averageQuestion = terms.length / totalQuestionTypes;

  if (terms.length === 2) {
    if (totalQuestionTypes === 2) {
      if (written) {
        writtenTermDisplay = [...terms].splice(0, 1);
        if (matching) {
          matchingTermDisplay = [...terms].splice(1);
        } else if (multipleChoice) {
          multipleChoiceTermDisplay = [...terms].splice(1);
        } else {
          trueFalseTermDisplay = [...terms].splice(1);
        }
      } else if (matching) {
        matchingTermDisplay = [...terms].splice(0, 1);
        if (multipleChoice) {
          multipleChoiceTermDisplay = [...terms].splice(1);
        } else {
          trueFalseTermDisplay = [...terms].splice(1);
        }
      } else {
        multipleChoiceTermDisplay = [...terms].splice(0, 1);
        trueFalseTermDisplay = [...terms].splice(1);
      }
    } else if (totalQuestionTypes === 3) {
      if (written) {
        writtenTermDisplay = [...terms].splice(0, 1);
        if (matching) {
          matchingTermDisplay = [...terms].splice(1);
          handleChangeMultipleChoice(false);
          handleChangeTrueFalse(false);
        } else {
          multipleChoiceTermDisplay = [...terms].splice(1);
          handleChangeMatching(false);
          handleChangeTrueFalse(false);
        }
      } else {
        matchingTermDisplay = [...terms].splice(0, 1);
        multipleChoiceTermDisplay = [...terms].splice(1);
        handleChangeWritten(false);
        handleChangeMatching(false);
      }
    } else if (totalQuestionTypes === 4) {
      writtenTermDisplay = [...terms].splice(0, 1);
      matchingTermDisplay = [...terms].splice(1);
      handleChangeMultipleChoice(false);
      handleChangeTrueFalse(false);
    }
  } else if (terms.length === 3) {
    if (totalQuestionTypes === 2) {
      if (written) {
        writtenTermDisplay = [...terms].splice(0, 1);
        if (matching) {
          matchingTermDisplay = [...terms].splice(1);
        } else if (multipleChoice) {
          multipleChoiceTermDisplay = [...terms].splice(1);
        } else {
          trueFalseTermDisplay = [...terms].splice(1);
        }
      } else if (matching) {
        matchingTermDisplay = [...terms].splice(0, 1);
        if (multipleChoice) {
          multipleChoiceTermDisplay = [...terms].splice(1);
        } else {
          trueFalseTermDisplay = [...terms].splice(1);
        }
      } else {
        multipleChoiceTermDisplay = [...terms].splice(0, 1);
        trueFalseTermDisplay = [...terms].splice(1);
      }
    } else if (totalQuestionTypes === 3) {
      if (written) {
        writtenTermDisplay = [...terms].splice(0, 1);
        if (matching) {
          matchingTermDisplay = [...terms].splice(1, 2);
          if (multipleChoice) {
            multipleChoiceTermDisplay = [...terms].splice(2);
          } else {
            trueFalseTermDisplay = [...terms].splice(2);
          }
        } else {
          multipleChoiceTermDisplay = [...terms].splice(1, 2);
          trueFalseTermDisplay = [...terms].splice(2);
        }
      }
    } else if (totalQuestionTypes === 4) {
      writtenTermDisplay = [...terms].splice(0, 1);
      matchingTermDisplay = [...terms].splice(1, 2);
      multipleChoiceTermDisplay = [...terms].splice(2);
      handleChangeTrueFalse(false);
    }
  } else if (terms.length > 3) {
    if (totalQuestionTypes === 2) {
      if (written) {
        writtenTermDisplay = [...terms].splice(0, averageQuestion);
        if (matching) {
          matchingTermDisplay = [...terms].splice(averageQuestion);
        } else if (multipleChoice) {
          multipleChoiceTermDisplay = [...terms].splice(averageQuestion);
        } else {
          trueFalseTermDisplay = [...terms].splice(averageQuestion);
        }
      } else if (matching) {
        matchingTermDisplay = [...terms].splice(0, averageQuestion);
        if (multipleChoice) {
          multipleChoiceTermDisplay = [...terms].splice(averageQuestion);
        } else {
          trueFalseTermDisplay = [...terms].splice(averageQuestion);
        }
      } else {
        multipleChoiceTermDisplay = [...terms].splice(0, averageQuestion);
        trueFalseTermDisplay = [...terms].splice(averageQuestion);
      }
    } else if (totalQuestionTypes === 3) {
      if (written) {
        writtenTermDisplay = [...terms].splice(0, averageQuestion);
        if (matching) {
          matchingTermDisplay = [...terms].splice(
            averageQuestion,
            averageQuestion + averageQuestion - 1
          );
          if (multipleChoice) {
            multipleChoiceTermDisplay = [...terms].splice(
              averageQuestion + averageQuestion
            );
          } else {
            trueFalseTermDisplay = [...terms].splice(
              averageQuestion + averageQuestion
            );
          }
        } else {
          multipleChoiceTermDisplay = [...terms].splice(
            averageQuestion,
            averageQuestion + averageQuestion - 1
          );
          trueFalseTermDisplay = [...terms].splice(
            averageQuestion + averageQuestion
          );
        }
      } else {
        matchingTermDisplay = [...terms].splice(0, averageQuestion);
        multipleChoiceTermDisplay = [...terms].splice(
          averageQuestion,
          averageQuestion + averageQuestion - 1
        );
        trueFalseTermDisplay = [...terms].splice(
          averageQuestion + averageQuestion
        );
      }
    } else if (totalQuestionTypes === 4) {
      writtenTermDisplay = [...terms].splice(0, averageQuestion);
      matchingTermDisplay = [...terms].splice(
        averageQuestion,
        averageQuestion + averageQuestion - 1
      );
      multipleChoiceTermDisplay = [...terms].splice(
        averageQuestion + averageQuestion,
        averageQuestion + averageQuestion + averageQuestion - 2
      );
      trueFalseTermDisplay = [...terms].splice(
        averageQuestion + averageQuestion + averageQuestion
      );
    }
  }

  return (
    <div className={classes.testsContent}>
      {written && (
        <WrittenQuestions
          classes={classes}
          terms={terms}
          checkAnswer={checkAnswer}
          termDisplay={writtenTermDisplay}
          handleSetWrittenGrade={handleSetWrittenGrade}
        />
      )}
      {matching && (
        <MatchingQuestions
          classes={classes}
          terms={terms}
          checkAnswer={checkAnswer}
          termDisplay={matchingTermDisplay}
          handleSetMatchingGrade={handleSetMatchingGrade}
        />
      )}
      {multipleChoice && (
        <MultipeChoiceQuestions
          classes={classes}
          terms={terms}
          checkAnswer={checkAnswer}
          termDisplay={multipleChoiceTermDisplay}
          handleSetMultipileChoiceGrade={handleSetMultipileChoiceGrade}
        />
      )}
      {trueFalse && (
        <TrueFalseQuestions
          classes={classes}
          terms={terms}
          checkAnswer={checkAnswer}
          termDisplay={trueFalseTermDisplay}
          handleSetTrueFalseGrade={handleSetTrueFalseGrade}
        />
      )}

      <Grid className={classes.gridItem}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleCheckAnswer}
          // disabled={checkAnswer}
        >
          Check answer
        </Button>
      </Grid>
    </div>
  );
};

export default TestsContent;
