import React from 'react';

import StudyClassList from './studyClassBody/StudyClassList';

const StudyClassBody = ({ classes, studyClasses, listTitle }) => (
  <div className={classes.body}>
    <StudyClassList studyClasses={studyClasses} listTitle={listTitle} />
  </div>
);

export default StudyClassBody;
