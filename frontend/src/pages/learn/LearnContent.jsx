import React, { useState } from 'react';

// import Button from '@material-ui/core/Button';

import LearnContentItem from './learnContent/LearnContentItem';

const LearnContent = ({
  classes,
  terms,
  handleChangeFamiliar,
  handleChangeMasteres,
  answered,
  correct,
  handleSetCorrect,
  handleAnswer,
  handleSetUserAnswer,
  userAnswer,
  mastered
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleSetActiveStep = value => setActiveStep(value);

  const [questions, setQuestions] = useState([...terms]);

  const handleSetQuestions = (index, value) =>
    setQuestions(() => {
      const newQuestions = [...questions];
      newQuestions[index].check = value;
      return newQuestions;
    });

  const handleSetQuestionsMaster = (index, value) =>
    setQuestions(() => {
      const newQuestions = [...questions];
      newQuestions[index].check2 = value;
      return newQuestions;
    });

  return (
    <div className={classes.learnContent}>
      <LearnContentItem
        classes={classes}
        terms={terms}
        activeStep={activeStep}
        questions={questions}
        handleSetActiveStep={handleSetActiveStep}
        handleSetQuestions={handleSetQuestions}
        handleChangeFamiliar={handleChangeFamiliar}
        handleSetQuestionsMaster={handleSetQuestionsMaster}
        handleChangeMasteres={handleChangeMasteres}
        answered={answered}
        correct={correct}
        handleSetCorrect={handleSetCorrect}
        handleAnswer={handleAnswer}
        handleSetUserAnswer={handleSetUserAnswer}
        userAnswer={userAnswer}
        mastered={mastered}
      />
    </div>
  );
};

export default LearnContent;
