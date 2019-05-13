import React, { useState, useEffect } from 'react';
import { useSelector, useActions } from 'react-redux';
import { withRouter } from 'react-router-dom';

import useStyles from './studyClasses/StudyClasses.styles';

import StudyClassHeader from './studyClasses/StudyClassHeader';
import StudyClassBody from './studyClasses/StudyClassBody';
import {
  studyClassActions,
  allStudyClassSelector,
  createdStudyClassSelector,
  otherStudyClassSelector
} from '../states/studyClasses';

const StudyClass = ({ match }) => {
  const classes = useStyles();

  const allStudyClasses = useSelector(state => allStudyClassSelector(state.ormDB));
  const createdStudyClasses = useSelector(state => createdStudyClassSelector(state.ormDB));
  const otherStudyClasses = useSelector(state => otherStudyClassSelector(state.ormDB));

  const { fetchStudyClasses } = useActions({
    fetchStudyClasses: userId => studyClassActions.fetch.pending(userId)
  });

  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  useEffect(() => {
    fetchStudyClasses(match.params.userId);
  }, []);

  let studyClassesToDisplay;
  let listTitle;

  switch (tabValue) {
    case 0: {
      studyClassesToDisplay = allStudyClasses;
      listTitle = 'All your study classes';
      break;
    }
    case 1: {
      studyClassesToDisplay = createdStudyClasses;
      listTitle = 'Your created study classes';
      break;
    }
    case 2: {
      studyClassesToDisplay = otherStudyClasses;
      listTitle = 'Study classes from others';
      break;
    }
    default:
      studyClassesToDisplay = [];
  }

  return (
    <React.Fragment>
      <StudyClassHeader
        classes={classes}
        allStudyClassLength={allStudyClasses.length}
        createdStudyClassesLength={createdStudyClasses.length}
        otherStudyClassesLength={otherStudyClasses.length}
        tabValue={tabValue}
        handleChangeTab={handleChangeTab}
      />
      <StudyClassBody
        classes={classes}
        studyClasses={studyClassesToDisplay}
        listTitle={listTitle}
      />
    </React.Fragment>
  );
};

export default withRouter(StudyClass);
