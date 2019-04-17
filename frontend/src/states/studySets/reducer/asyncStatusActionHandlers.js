import { updateObject } from '../../../utils/redux/utilityFunctions';

const initialAsyncStatus = {
  fetchStatus: {
    isLoading: false,
    error: {}
  }
};

const handleFetchStudySetRequest = state =>
  updateObject(state, {
    fetchStatus: {
      isLoading: true,
      error: {}
    }
  });

const handleFetchStudySetSuccess = state =>
  updateObject(state, {
    fetchStatus: {
      isLoading: false,
      error: {}
    }
  });

const handleFetchStudySetError = (state, action) =>
  updateObject(state, {
    fetchStatus: {
      isLoading: false,
      error: action.payload
    }
  });

export {
  initialAsyncStatus,
  handleFetchStudySetRequest,
  handleFetchStudySetSuccess,
  handleFetchStudySetError
};
