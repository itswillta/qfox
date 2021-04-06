/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

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

const MultipeChoiceQuestions = ({
  classes,
  terms,
  checkAnswer,
  termDisplay,
  handleSetMultipileChoiceGrade
}) => {
  const [shuffleTerms, setShuffleTerms] = useState(
    [...terms].sort(() => 0.5 - Math.random())
  );

  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (!checkAnswer) {
      return;
    }

    const multipleChoiceGrade = termDisplay.reduce(
      (totalGrade, term, index) => {
        if (!term.definition.includes(answers[`answer_${index}`])) {
          return totalGrade;
        }

        return totalGrade + 1;
      },
      0
    );

    handleSetMultipileChoiceGrade(multipleChoiceGrade);
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
          {termDisplay.length} Multipe choice questions
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
            <RadioGroup name={`answer_${index}`} onChange={handleChangeAnswer}>
              {terms.length < 3
                ? shuffleTerms.map(termAnwer => (
                    <FormControlLabel
                      key={termAnwer.id}
                      value={termAnwer.definition}
                      control={<Radio color="primary" />}
                      label={termAnwer.definition}
                    />
                  ))
                : shuffleTerms
                    .filter(value => value !== term)
                    .slice(0, 2)
                    .concat(term)
                    .map(termAnwer => (
                      <FormControlLabel
                        key={termAnwer.id}
                        value={termAnwer.definition}
                        control={<Radio color="primary" />}
                        label={termAnwer.definition}
                      />
                    ))}
            </RadioGroup>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default MultipeChoiceQuestions;
