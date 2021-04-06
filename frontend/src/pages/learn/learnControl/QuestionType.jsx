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

const QuestionType = ({ classes }) => {
  const [writtenChecked, setWrittenChecked] = useState(true);
  const [multipleChoiceChecked, setMultipleChoiceChecked] = useState(true);

  const handleChangeWrittenChecked = e => {
    setWrittenChecked(e.target.checked);
  };

  const handleChangeMultipleChoiceChecked = e => {
    setMultipleChoiceChecked(e.target.checked);
  };

  const handleStartOver = () => {};

  const error = !(writtenChecked || multipleChoiceChecked);

  return (
    <React.Fragment>
      <Grid item className={classes.gridItemControl}>
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
              label="Written questions"
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
          </FormGroup>
          <FormHelperText>
            {error && 'You must select at least one question'}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleStartOver}
          disabled={error}
        >
          START OVER
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default QuestionType;
