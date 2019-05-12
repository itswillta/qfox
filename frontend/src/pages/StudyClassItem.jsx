import React from 'react';

import useStyles from './studyClassItem/StudyClassItem.styles';

import StudyClassItemHeader from './studyClassItem/StudyClassItemHeader';

const studyClassInfo = {
  owner: {
    name: 'Peter',
    profilePictureUrl: '/images/profile-default.jpg'
  },
  title: 'h3ba',
  members: [
    { name: 'Harry', profilePictureUrl: '/images/profile-default.jpg' },
    { name: 'Tom', profilePictureUrl: '/images/profile-default.jpg' },
    { name: 'John', profilePictureUrl: '/images/profile-default.jpg' }
  ],
  studySets: [],
  permission: 'allow'
};

const StudyClassItem = () => {
  const classes = useStyles();

  const [tabValue, setTabValue] = React.useState(0);

  const handleChangeTab = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  let infoToDisplay;

  switch (tabValue) {
    case 0: {
      infoToDisplay = studyClassInfo.studySets;
      break;
    }
    case 1: {
      infoToDisplay = studyClassInfo.members;
      break;
    }
    default:
      infoToDisplay = [];
  }

  return (
    <React.Fragment>
      <StudyClassItemHeader
        classes={classes}
        membersLength={studyClassInfo.members.length}
        studySetsLength={studyClassInfo.studySets.length}
        studyClassTitle={studyClassInfo.title}
        permission={studyClassInfo.permission}
        tabValue={tabValue}
        handleChangeTab={handleChangeTab}
      />
      {infoToDisplay}
    </React.Fragment>
  );
};

export default StudyClassItem;
