import { createSelector } from 'redux-orm';
import { orm } from '../orm';
import { STUDY_CLASS_ROLE } from '../../config/studyClassRoles';

const dbStateSelector = state => state;

const allStudyClassSelector = createSelector(
  orm,
  dbStateSelector,
  session =>
    session.StudyClass.all()
      .toModelArray()
      .map(studyClass => ({
        ...studyClass.ref
      }))
);

const createdStudyClassSelector = createSelector(
  orm,
  dbStateSelector,
  session =>
    session.StudyClass.all()
      .toModelArray()
      .map(studyClass => ({
        ...studyClass.ref
      }))
      .filter(studyClass => studyClass.role === STUDY_CLASS_ROLE.OWNER)
);

const otherStudyClassSelector = createSelector(
  orm,
  dbStateSelector,
  session =>
    session.StudyClass.all()
      .toModelArray()
      .map(studyClass => ({
        ...studyClass.ref
      }))
      .filter(studyClass => studyClass.role === STUDY_CLASS_ROLE.LEARNER)
);

export { allStudyClassSelector, createdStudyClassSelector, otherStudyClassSelector };
