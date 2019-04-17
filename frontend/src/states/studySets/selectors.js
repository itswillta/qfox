import { createSelector } from 'redux-orm';
import { orm } from '../orm';

const dbStateSelector = state => state;

const studySetSelector = createSelector(
  orm,
  dbStateSelector,
  session =>
    session.StudySet.all()
      .toModelArray()
      .map(studySet => ({
        ...studySet.ref
      }))
);

export { studySetSelector };
