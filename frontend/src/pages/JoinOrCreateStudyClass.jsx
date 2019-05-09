import React from 'react';

import useStyles from './joinOrCreateStudyClass/JoinOrCreateStudyClass.style';

import CreateStudyClass from './joinOrCreateStudyClass/CreateStudyClass';
import JoinStudyClass from './joinOrCreateStudyClass/JoinStudyClass';

const JoinOrCreateStudyClass = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <JoinStudyClass classes={classes} />
      <CreateStudyClass classes={classes} />
    </React.Fragment>
  );
};

export default JoinOrCreateStudyClass;
