import { ORM } from 'redux-orm';

import StudySet from '../studySets/model';

const orm = new ORM();
orm.register(StudySet);

const initialDBState = orm.getEmptyState();

export { orm, initialDBState };
