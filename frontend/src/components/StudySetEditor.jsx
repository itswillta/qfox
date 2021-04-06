import React from 'react';

import useStyles from './studySetEditor/StudySetEditor.styles';
import StudySetEditorForm from './studySetEditor/StudySetEditorForm';

const StudySetEditor = ({ mode = 'create', studySet = {} }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StudySetEditorForm classes={classes} mode={mode} studySet={studySet} />
    </div>
  );
};

export default StudySetEditor;
