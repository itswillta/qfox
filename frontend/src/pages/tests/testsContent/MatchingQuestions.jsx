/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const Correct = ({ term }) => (
  <div>
    <Typography variant="overline">CORRECT - </Typography>
    <Typography variant="caption" color="primary">
      {term.term}
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
      {term.term}
    </Typography>
  </div>
);

const MatchingQuestions = ({
  classes,
  checkAnswer,
  termDisplay,
  handleSetMatchingGrade
}) => {
  const [shuffleTerms, setShuffleTerms] = useState(
    [...termDisplay].sort(() => 0.5 - Math.random())
  );

  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (!checkAnswer) {
      return;
    }

    const matchingGrade = termDisplay.reduce((totalGrade, term, index) => {
      if (!term.term.includes(answers[`answer_${index}`])) {
        return totalGrade;
      }

      return totalGrade + 1;
    }, 0);

    handleSetMatchingGrade(matchingGrade);
  }, [checkAnswer]);

  const handleChangeAnswer = e => {
    setAnswers({
      ...answers,
      [e.target.name]: shuffleTerms[e.target.value - 1].term
    });
  };

  return (
    <Grid container direction="column">
      <Grid item className={classes.gridItem}>
        <Typography variant="h4">
          {termDisplay.length} Matching questions
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row">
          <Grid item xs={6}>
            <Grid container direction="column">
              {termDisplay.map((term, index) => (
                <Grid item className={classes.gridItemQusetion} key={term.id}>
                  <Grid container direction="row">
                    <Grid item xs={1}>
                      <Typography variant="h6">{index + 1}.</Typography>
                    </Grid>
                    {!checkAnswer && (
                      <Grid item xs={2}>
                        <TextField
                          onChange={handleChangeAnswer}
                          name={`answer_${index}`}
                        />
                      </Grid>
                    )}

                    <Grid item xs={9}>
                      <Typography variant="h6">{term.definition}</Typography>
                    </Grid>
                  </Grid>
                  {checkAnswer &&
                    (term.term.includes(answers[`answer_${index}`]) ? (
                      <Correct term={term} />
                    ) : (
                      <Incorrect term={term} index={index} answers={answers} />
                    ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column">
              {shuffleTerms.map((shuffleTerm, index) => (
                <Grid
                  item
                  className={classes.gridItemQusetion}
                  key={shuffleTerm.id}
                >
                  <Typography variant="h6">
                    {index + 1}. {shuffleTerm.term}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MatchingQuestions;
