/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const Correct = ({ index, answers }) => (
  <div>
    <Typography variant="overline">CORRECT - </Typography>
    <Typography variant="caption" color="primary">
      {answers[`answer_${index}`]}
    </Typography>
  </div>
);

const Incorrect = ({ term, index, answers, shuffleTerms }) => (
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
      {`${term.definition === shuffleTerms[index].definition}`}
    </Typography>
  </div>
);

const isCorrect = (term, index, shuffleTerms, answers) => {
  const a =
    term.definition === shuffleTerms[index].definition &&
    answers[`answer_${index}`] === 'true';

  const b =
    term.definition !== shuffleTerms[index].definition &&
    answers[`answer_${index}`] === 'false';

  return a || b;
};

const TrueFalseQuestions = ({
  classes,
  terms,
  checkAnswer,
  termDisplay,
  handleSetTrueFalseGrade
}) => {
  const [shuffleTerms, setShuffleTerms] = useState(
    [...terms].sort(() => 0.5 - Math.random())
  );

  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (!checkAnswer) {
      return;
    }

    const trueFalseGrade = termDisplay.reduce((totalGrade, term, index) => {
      if (!isCorrect(term, index, shuffleTerms, answers)) {
        return totalGrade;
      }

      return totalGrade + 1;
    }, 0);

    handleSetTrueFalseGrade(trueFalseGrade);
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
          {termDisplay.length} True/False questions
        </Typography>
      </Grid>
      {termDisplay.map((term, index) => (
        <Grid item className={classes.gridItemQusetion} key={term.id}>
          <Typography variant="h6">
            {index + 1}. {term.term} {'--> '}
            {shuffleTerms[index].definition}
          </Typography>
          {checkAnswer ? (
            isCorrect(term, index, shuffleTerms, answers) ? (
              <Correct term={term} index={index} answers={answers} />
            ) : (
              <Incorrect
                term={term}
                index={index}
                answers={answers}
                shuffleTerms={shuffleTerms}
              />
            )
          ) : (
            <RadioGroup onChange={handleChangeAnswer} name={`answer_${index}`}>
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="True"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="primary" />}
                label="False"
              />
            </RadioGroup>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default TrueFalseQuestions;
