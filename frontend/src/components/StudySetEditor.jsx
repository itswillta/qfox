import React from 'react';

import useStyles from './studySetEditor/StudySetEditor.styles';
import StudySetEditorForm from './studySetEditor/StudySetEditorForm';

const StudySetEditor = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StudySetEditorForm classes={classes} />
    </div>
  );
};

export default StudySetEditor;
