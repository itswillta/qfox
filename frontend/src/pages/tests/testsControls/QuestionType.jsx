/* eslint-disable nonblock-statement-body-position */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const QuestionType = ({
  classes,
  written,
  matching,
  multipleChoice,
  trueFalse,
  totalQuestionTypes,
  handleChangeWritten,
  handleChangeMatching,
  handleChangeMultipleChoice,
  handleChangeTrueFalse,
  handleCheckAnswer,
  handleChangeTotalQuestionTypes,
  handleSetGrade
}) => {
  const [writtenChecked, setWrittenChecked] = useState(written);
  const [matchingChecked, setMatchingChecked] = useState(matching);
  const [multipleChoiceChecked, setMultipleChoiceChecked] = useState(
    multipleChoice
  );
  const [trueFalseChecked, setTrueFalseChecked] = useState(trueFalse);
  const [currentTotalQuestiontypes, setCurrentTotalQuestiontypes] = useState(
    totalQuestionTypes
  );

  const handleChangeWrittenChecked = e => {
    setWrittenChecked(e.target.checked);
    if (e.target.checked) {
      setCurrentTotalQuestiontypes(currentTotalQuestiontypes + 1);
    } else setCurrentTotalQuestiontypes(currentTotalQuestiontypes - 1);
  };

  const handleChangeMatchingChecked = e => {
    setMatchingChecked(e.target.checked);
    if (e.target.checked) {
      setCurrentTotalQuestiontypes(currentTotalQuestiontypes + 1);
    } else setCurrentTotalQuestiontypes(currentTotalQuestiontypes - 1);
  };

  const handleChangeMultipleChoiceChecked = e => {
    setMultipleChoiceChecked(e.target.checked);
    if (e.target.checked) {
      setCurrentTotalQuestiontypes(currentTotalQuestiontypes + 1);
    } else setCurrentTotalQuestiontypes(currentTotalQuestiontypes - 1);
  };

  const handleChangeTrueFalseChecked = e => {
    setTrueFalseChecked(e.target.checked);
    if (e.target.checked) {
      setCurrentTotalQuestiontypes(currentTotalQuestiontypes + 1);
    } else {
      setCurrentTotalQuestiontypes(currentTotalQuestiontypes - 1);
    }
  };

  const handleCreateNewTest = () => {
    handleChangeWritten(writtenChecked);
    handleChangeMatching(matchingChecked);
    handleChangeMultipleChoice(multipleChoiceChecked);
    handleChangeTrueFalse(trueFalseChecked);
    handleCheckAnswer(false);
    handleChangeTotalQuestionTypes(currentTotalQuestiontypes);
    handleSetGrade(0);
  };

  const error = !(
    writtenChecked ||
    matchingChecked ||
    multipleChoiceChecked ||
    trueFalseChecked
  );

  return (
    <React.Fragment>
      <Grid item className={classes.gridItemControls}>
        <FormControl component="fieldset" error={error}>
          <FormLabel component="legend">QUESTION TYPE</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={writtenChecked}
                  color="primary"
                  onChange={handleChangeWrittenChecked}
                />
              }
              label="Written"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={matchingChecked}
                  color="primary"
                  onChange={handleChangeMatchingChecked}
                />
              }
              label="Matching"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={multipleChoiceChecked}
                  color="primary"
                  onChange={handleChangeMultipleChoiceChecked}
                />
              }
              label="Multiple choice"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={trueFalseChecked}
                  color="primary"
                  onChange={handleChangeTrueFalseChecked}
                />
              }
              label="True/False"
            />
          </FormGroup>
          <FormHelperText>
            {error && 'You must select at least one question'}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item className={classes.gridItemControls}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCreateNewTest}
          disabled={error}
        >
          Create new test
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default QuestionType;
