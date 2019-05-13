/* eslint-disable no-nested-ternary */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const Correct = ({ term }) => (
  <div>
    <Typography variant="overline">CORRECT - </Typography>
    <Typography variant="caption" color="primary">
      {term.definition}
    </Typography>
  </div>
);

const Incorrect = ({ term, index, answers }) => (
  <div>
    <Typography variant="overline">INCORRECT - </Typography>
    <Typography variant="caption" color="error">
      {answers[`answer_${index}`]
        ? answers[`answer_${index}`]
        : 'No answer given'}
    </Typography>
    <br />
    <Typography variant="overline">THE ANSWER - </Typography>
    <Typography variant="caption" color="primary">
      {term.definition}
    </Typography>
  </div>
);

const WrittenQuestions = ({
  classes,
  checkAnswer,
  termDisplay,
  handleSetWrittenGrade
}) => {
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (!checkAnswer) {
      return;
    }

    const writtenGrade = termDisplay.reduce((totalGrade, term, index) => {
      if (!term.definition.includes(answers[`answer_${index}`])) {
        return totalGrade;
      }

      return totalGrade + 1;
    }, 0);

    handleSetWrittenGrade(writtenGrade);
  }, [checkAnswer]);

  const handleChangeAnswer = e => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Grid container direction="column">
      <Grid item className={classes.gridItem}>
        <Typography variant="h4">
          {termDisplay.length} Written questions
        </Typography>
      </Grid>
      {termDisplay.map((term, index) => (
        <Grid item className={classes.gridItemQusetion} key={term.id}>
          <Typography variant="h6">
            {index + 1}. {term.term}
          </Typography>
          {checkAnswer ? (
            term.definition.includes(answers[`answer_${index}`]) ? (
              <Correct term={term} />
            ) : (
              <Incorrect term={term} index={index} answers={answers} />
            )
          ) : (
            <TextField
              onChange={handleChangeAnswer}
              helperText="TYPE THE ANSWER"
              name={`answer_${index}`}
            />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default WrittenQuestions;
