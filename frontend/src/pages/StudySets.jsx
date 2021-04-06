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
import api from '../services/restClient';

const StudySets = ({ match }) => {
  const classes = useStyles();

  const allStudySets = useSelector(state => allStudySetSelector(state.ormDB));
  const createdStudySets = useSelector(state => createdStudySetSelector(state.ormDB));
  const otherStudySets = useSelector(state => otherStudySetSelector(state.ormDB));

  const { fetchStudySets } = useActions({
    fetchStudySets: userId => studySetActions.fetch.pending(userId)
  });

  const [tabValue, setTabValue] = React.useState(0);
  const [user, setUser] = React.useState(null);

  const handleChangeTab = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  useEffect(() => {
    const getUser = async () => {
      const response = await api.custom(`users/${match.params.userId}`).get();

      setUser(response.body().data());
    };

    getUser();
    fetchStudySets(match.params.userId);
  }, [match.params]);

  let studySetsToDisplay;
  let listTitle;

  switch (tabValue) {
    case 0: {
      studySetsToDisplay = allStudySets;
      listTitle = 'All study sets';
      break;
    }
    case 1: {
      studySetsToDisplay = createdStudySets;
      listTitle = 'Created study sets';
      break;
    }
    case 2: {
      studySetsToDisplay = otherStudySets;
      listTitle = 'Study sets from others';
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
        owner={user}
      />
      <StudySetBody classes={classes} listTitle={listTitle} studySets={studySetsToDisplay} />
    </div>
  );
};

export default withRouter(StudySets);
