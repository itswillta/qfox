import { initialDBState } from '../orm';
import { createReducer } from '../../utils/redux/utilityFunctions';

import { studySetDBActionHandlers } from '../studySets/reducer';
import { studyClassDBActionHandlers } from '../studyClasses/reducer';

export default createReducer(initialDBState, {
  ...studySetDBActionHandlers,
  ...studyClassDBActionHandlers
});
