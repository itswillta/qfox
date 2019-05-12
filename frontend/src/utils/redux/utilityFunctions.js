const asyncTypes = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

const createAsyncTypes = typeString =>
  Object.values(asyncTypes).reduce((acc, curr) => {
    acc[curr] = `${typeString}_${curr}`;
    return acc;
  }, {});

const createAction = (type, payload = {}) => ({ type, payload });

const createAsyncActions = ACTION_ASYNC => ({
  pending: (payload = {}) => createAction(ACTION_ASYNC.PENDING, payload),
  success: (payload = {}) => createAction(ACTION_ASYNC.SUCCESS, payload),
  error: (error = {}) => createAction(ACTION_ASYNC.ERROR, error)
});

const updateObject = (oldObject, newValues) => ({ ...oldObject, ...newValues });

const updateItemInArray = (array, itemId, updateItemCallback) => {
  const updatedItems = array.map(item => {
    if (item.id !== itemId) {
      return item;
    }

    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
};

const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action);
  }

  return state;
};

export {
  updateObject,
  updateItemInArray,
  createReducer,
  createAction,
  createAsyncActions,
  createAsyncTypes
};
