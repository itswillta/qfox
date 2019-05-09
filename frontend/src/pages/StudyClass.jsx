import React from 'react';

import useStyles from './studyClasses/StudyClasses.styles';

import StudyClassHeader from './studyClasses/StudyClassHeader';
import StudyClassBody from './studyClasses/StudyClassBody';

const createdStudyClassesList = [
  {
    id: 1,
    title: 'English grammar',
    description:
      'This grammar course helps you master a lot of grammar points in English.',
    permission: 'allow',
    owner: {
      name: 'Peter',
      profilePictureUrl: '/images/profile-default.jpg'
    },
    members: [
      {
        name: 'Harry',
        profilePictureUrl: '/images/profile-default.jpg'
      }
    ],
    studySets: []
  },
  {
    id: 2,
    title: 'Flower',
    description: 'Flowers and more flowers come join the flower club',
    permission: 'not_allow',
    owner: {
      name: 'Tom',
      profilePictureUrl: '/images/profile-default.jpg'
    },
    members: [],
    studySets: [
      {
        title: 'rose'
      },
      {
        title: 'tulip'
      }
    ]
  }
];

const otherStudyClassesList = [
  {
    id: 3,
    title: 'Food',
    description: 'Flowers and more flowers come join the flower club',
    permission: 'allow',
    owner: {
      name: 'Harry',
      profilePictureUrl: '/images/profile-default.jpg'
    },
    members: [],
    studySets: [
      {
        title: 'rose'
      },
      {
        title: 'tulip'
      }
    ]
  }
];

const StudyClass = () => {
  const classes = useStyles();

  const [tabValue, setTabValue] = React.useState(0);

  const handleChangeTab = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  let studyClassesToDisplay;

  switch (tabValue) {
    case 0: {
      studyClassesToDisplay = createdStudyClassesList.concat(
        otherStudyClassesList
      );
      break;
    }
    case 1: {
      studyClassesToDisplay = createdStudyClassesList;
      break;
    }
    case 2: {
      studyClassesToDisplay = otherStudyClassesList;
      break;
    }
    default:
      studyClassesToDisplay = [];
  }

  return (
    <React.Fragment>
      <StudyClassHeader
        classes={classes}
        allStudyClassLenght={
          createdStudyClassesList.length + otherStudyClassesList.length
        }
        createdStudyClassesLength={createdStudyClassesList.length}
        otherStudyClassesLenght={otherStudyClassesList.length}
        tabValue={tabValue}
        handleChangeTab={handleChangeTab}
      />
      <StudyClassBody classes={classes} studyClasses={studyClassesToDisplay} />
    </React.Fragment>
  );
};

export default StudyClass;
