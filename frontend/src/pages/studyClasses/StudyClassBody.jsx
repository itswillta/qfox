import React from 'react';

import StudyClassList from './studyClassBody/StudyClassList';

const StudyClassBody = ({ classes, studyClasses }) => (
  <div className={classes.body}>
    <StudyClassList studyClasses={studyClasses} />
  </div>
);

export default StudyClassBody;
