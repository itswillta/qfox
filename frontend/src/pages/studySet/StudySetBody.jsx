import React from 'react';

import TermList from './StudySetBody/TermList';

const StudySetBody = ({ classes, studySet }) => (
  <div className={classes.body}>
    <TermList terms={studySet.terms} classes={classes} />
  </div>
);

export default StudySetBody;
