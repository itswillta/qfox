import { orm } from '../../orm';

const fetchStudySetsToDB = (dbState, action) => {
  const session = orm.session(dbState);

  const { StudySet } = session;

  action.payload.forEach(studySet => StudySet.upsert(studySet));

  return session.state;
};

export { fetchStudySetsToDB };
