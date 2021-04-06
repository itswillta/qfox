import { ORM } from 'redux-orm';

import StudySet from '../studySets/model';
import StudyClass from '../studyClasses/model';

const orm = new ORM();
orm.register(StudySet, StudyClass);

const initialDBState = orm.getEmptyState();

export { orm, initialDBState };
