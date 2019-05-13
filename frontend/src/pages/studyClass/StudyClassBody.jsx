import React from 'react';
import { useRedux } from 'react-redux';

import StudySetList from '../../components/StudySetList';
import UserList from '../../components/UserList';

import { fullStudyClassActions } from '../../states/fullStudyClass';

const addRoleToMembers = (members, ownerId) =>
  members.map(member =>
    member.id === ownerId ? { ...member, role: 'Class Owner' } : { ...member, role: 'Class Member' }
  );

const StudyClassBody = ({ classes, studyClass, whichOneIsShowing = 'studySets' }) => {
  // eslint-disable-next-line no-unused-vars
  const [removeStudySetStatus, { removeStudySet }] = useRedux(
    state => state.currentStudyClass.removeStudySetStatus,
    {
      removeStudySet: (userId, studyClassId, studySetIds) =>
        fullStudyClassActions.removeStudySets.pending({ userId, studyClassId, studySetIds })
    }
  );

  const handleRemoveFromClass = studySetId => {
    removeStudySet(studyClass.owner.id, studyClass.id, [studySetId]);
  };

  return (
    <div className={classes.body}>
      {studyClass.studySets && whichOneIsShowing === 'studySets' && (
        <StudySetList
          type="classSets"
          studySets={studyClass.studySets}
          listTitle="Study sets of this class"
          handleRemoveFromClass={handleRemoveFromClass}
        />
      )}
      {studyClass.members && whichOneIsShowing === 'members' && (
        <UserList
          type="classMembers"
          users={addRoleToMembers(studyClass.members, studyClass.owner.id)}
          listTitle="Members of this class"
        />
      )}
    </div>
  );
};

export default StudyClassBody;
