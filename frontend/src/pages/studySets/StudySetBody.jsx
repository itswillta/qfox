import React from 'react';
import StudySetList from '../../components/StudySetList';

const StudySetBody = ({ classes, studySets }) => (
  <div className={classes.body}>
    <StudySetList studySets={studySets} />
  </div>
);

export default StudySetBody;
