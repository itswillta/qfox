import React from 'react';

import StudySetList from '../../components/StudySetList';

const StudySetBody = ({ classes, studySets, listTitle }) => (
  <div className={classes.body}>
    <StudySetList studySets={studySets} listTitle={listTitle} />
  </div>
);

export default StudySetBody;
