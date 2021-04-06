import { orm } from '../../orm';

const fetchStudySetsToDB = (dbState, action) => {
  const session = orm.session(dbState);

  const { StudySet } = session;

  StudySet.delete();

  action.payload.forEach(studySet => StudySet.create(studySet));

  return session.state;
};

const deleteStudySetFromDB = (dbState, action) => {
  const session = orm.session(dbState);

  const { StudySet } = session;

  const foundStudySet = StudySet.withId(action.payload.studySetId);

  if (foundStudySet) {
    foundStudySet.delete();
  }

  return session.state;
};

export { fetchStudySetsToDB, deleteStudySetFromDB };
