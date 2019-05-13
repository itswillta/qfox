import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { useRedux } from 'react-redux';

import useStyles from './studyClass/StudyClassItem.styles';

import StudyClassItemHeader from './studyClass/StudyClassItemHeader';
import StudyClassBody from './studyClass/StudyClassBody';
import { fullStudyClassActions } from '../states/fullStudyClass';

const StudyClass = ({ match }) => {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  const { userId, studyClassId } = match.params;

  const [studyClass, { fetchStudyClass }] = useRedux(state => state.currentStudyClass.studyClass, {
    fetchStudyClass: () => fullStudyClassActions.fetchStudyClass.pending({ userId, studyClassId })
  });

  useEffect(() => {
    fetchStudyClass();
  }, []);

  const handleChangeTab = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  let whichOneToShow;

  switch (tabValue) {
    case 0: {
      whichOneToShow = 'studySets';
      break;
    }
    case 1: {
      whichOneToShow = 'members';
      break;
    }
    default:
      whichOneToShow = 'studySets';
  }

  return (
    <React.Fragment>
      <StudyClassItemHeader
        classes={classes}
        studyClass={studyClass}
        tabValue={tabValue}
        handleChangeTab={handleChangeTab}
      />
      <StudyClassBody
        classes={classes}
        studyClass={studyClass}
        whichOneIsShowing={whichOneToShow}
      />
    </React.Fragment>
  );
};

export default withRouter(StudyClass);
