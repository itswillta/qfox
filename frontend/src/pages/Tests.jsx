import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import useStyles from './tests/Tests.style';

import TestsControls from './tests/TestsControls';
import TestsContent from './tests/TestsContent';

const terms = [
  {
    id: 1,
    term: 'angry',
    definition: 'tức giận'
  },
  {
    id: 2,
    term: 'happy',
    definition: 'hạnh phúc'
  }
  // {
  //   id: 3,
  //   term: 'hungry',
  //   definition: 'đói'
  // },
  // {
  //   id: 4,
  //   term: 'sad',
  //   definition: 'buồn'
  // },
  // {
  //   id: 5,
  //   term: 'tired',
  //   definition: 'mệt mỏi'
  // }
];

const Tests = () => {
  const classes = useStyles();

  const [written, setWritten] = useState(true);
  const [matching, setMatching] = useState(false);
  const [multipleChoice, setMultipleChoice] = useState(false);
  const [trueFalse, setTrueFalse] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [totalQuestionTypes, setTotalQuestionTypes] = useState(1);
  const [grade, setGrade] = useState(0);

  const handleChangeWritten = value => setWritten(value);
  const handleChangeMatching = value => setMatching(value);
  const handleChangeMultipleChoice = value => setMultipleChoice(value);
  const handleChangeTrueFalse = value => setTrueFalse(value);
  const handleCheckAnswer = value => setCheckAnswer(value);
  const handleChangeTotalQuestionTypes = value => setTotalQuestionTypes(value);
  const addGrade = value => setGrade(grade2 => grade2 + value);
  const handleSetGrade = value => setGrade(value);

  return (
    <Grid container direction="row">
      <Grid item xs={9}>
        <TestsContent
          classes={classes}
          terms={terms}
          written={written}
          matching={matching}
          multipleChoice={multipleChoice}
          trueFalse={trueFalse}
          checkAnswer={checkAnswer}
          handleCheckAnswer={handleCheckAnswer}
          totalQuestionTypes={totalQuestionTypes}
          grade={grade}
          addGrade={addGrade}
          handleChangeWritten={handleChangeWritten}
          handleChangeMatching={handleChangeMatching}
          handleChangeMultipleChoice={handleChangeMultipleChoice}
          handleChangeTrueFalse={handleChangeTrueFalse}
        />
      </Grid>
      <Grid item xs={3}>
        <TestsControls
          classes={classes}
          terms={terms}
          written={written}
          matching={matching}
          multipleChoice={multipleChoice}
          trueFalse={trueFalse}
          grade={grade}
          checkAnswer={checkAnswer}
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
    </Grid>
  );
};

export default Tests;
