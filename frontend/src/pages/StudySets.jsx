import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useActions } from 'react-redux';

import useStyles from './studySets/StudySets.styles';

import {
  studySetActions,
  allStudySetSelector,
  createdStudySetSelector,
  otherStudySetSelector
} from '../states/studySets';
import StudySetHeader from './studySets/StudySetHeader';
import StudySetBody from './studySets/StudySetBody';

const StudySets = ({ match }) => {
  const classes = useStyles();

  const allStudySets = useSelector(state => allStudySetSelector(state.ormDB));
  const createdStudySets = useSelector(state => createdStudySetSelector(state.ormDB));
  const otherStudySets = useSelector(state => otherStudySetSelector(state.ormDB));

  const { fetchStudySets } = useActions({
    fetchStudySets: userId => studySetActions.fetch.pending(userId)
  });

  const [tabValue, setTabValue] = React.useState(0);

  const handleChangeTab = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  useEffect(() => {
    fetchStudySets(match.params.userId);
  }, []);

  let studySetsToDisplay;

  switch (tabValue) {
    case 0: {
      studySetsToDisplay = allStudySets;
      break;
    }
    case 1: {
      studySetsToDisplay = createdStudySets;
      break;
    }
    case 2: {
      studySetsToDisplay = otherStudySets;
      break;
    }
    default:
      studySetsToDisplay = [];
  }

  return (
    <div className={classes.root}>
      <StudySetHeader
        classes={classes}
        allStudySetLength={allStudySets.length}
        createdStudySetLength={createdStudySets.length}
        otherStudySetLength={otherStudySets.length}
        tabValue={tabValue}
        handleChangeTab={handleChangeTab}
      />
      <StudySetBody classes={classes} studySets={studySetsToDisplay} />
    </div>
  );
};

export default withRouter(StudySets);
