import React from 'react';

import Grid from '@material-ui/core/Grid';
import Note from '@material-ui/icons/Note';
import Typography from '@material-ui/core/Typography';

import QuestionType from './testsControls/QuestionType';

const TestsControls = ({
  classes,
  written,
  matching,
  multipleChoice,
  trueFalse,
  checkAnswer,
  totalQuestionTypes,
  grade,
  terms,
  handleChangeWritten,
  handleChangeMatching,
  handleChangeMultipleChoice,
  handleChangeTrueFalse,
  handleCheckAnswer,
  handleChangeTotalQuestionTypes,
  handleSetGrade
}) => (
  <div className={classes.testsControls}>
    <Grid container direction="column">
      <Grid item className={classes.gridItemControls}>
        <Grid container direction="row" justify="center">
          <Grid item className={classes.gridItemControls}>
            <Note color="primary" fontSize="large" />
          </Grid>
          <Grid item className={classes.gridItemControls}>
            <Typography variant="h4">Test</Typography>
          </Grid>
        </Grid>
      </Grid>
      {checkAnswer && (
        <Grid item className={classes.grade}>
          <Typography variant="h6">GRADE</Typography>
          <Typography variant="h4" color="primary">
            {`${(grade * 100) / terms.length}%`}
          </Typography>
        </Grid>
      )}
      <QuestionType
        classes={classes}
        written={written}
        matching={matching}
        multipleChoice={multipleChoice}
        trueFalse={trueFalse}
        totalQuestionTypes={totalQuestionTypes}
        handleChangeWritten={handleChangeWritten}
        handleChangeMatching={handleChangeMatching}
        handleChangeMultipleChoice={handleChangeMultipleChoice}
        handleChangeTrueFalse={handleChangeTrueFalse}
        handleCheckAnswer={handleCheckAnswer}
        handleChangeTotalQuestionTypes={handleChangeTotalQuestionTypes}
        handleSetGrade={handleSetGrade}
      />
    </Grid>
  </div>
);

export default TestsControls;
