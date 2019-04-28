import { createSelector } from 'redux-orm';
import { orm } from '../orm';
import { STUDY_SET_ROLE } from '../../config/studySetRoles';

const dbStateSelector = state => state;

const allStudySetSelector = createSelector(
  orm,
  dbStateSelector,
  session =>
    session.StudySet.all()
      .toModelArray()
      .map(studySet => ({
        ...studySet.ref
      }))
);

const createdStudySetSelector = createSelector(
  orm,
  dbStateSelector,
  session =>
    session.StudySet.all()
      .toModelArray()
      .map(studySet => ({
        ...studySet.ref
      }))
      .filter(studySet => studySet.role === STUDY_SET_ROLE.OWNER)
);

const otherStudySetSelector = createSelector(
  orm,
  dbStateSelector,
  session =>
    session.StudySet.all()
      .toModelArray()
      .map(studySet => ({
        ...studySet.ref
      }))
      .filter(studySet => studySet.role === STUDY_SET_ROLE.LEARNER)
);

export { allStudySetSelector, createdStudySetSelector, otherStudySetSelector };
