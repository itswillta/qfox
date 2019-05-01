import { updateObject } from '../../../utils/redux/utilityFunctions';

const setUpAsyncStatusProp = propName => {
  const initialAsyncStatus = {
    [propName]: {
      isLoading: false,
      error: {}
    }
  };

  const handleRequest = state =>
    updateObject(state, {
      [propName]: {
        isLoading: true,
        error: {}
      }
    });

  const handleSuccess = state =>
    updateObject(state, {
      [propName]: {
        isLoading: false,
        isLastRequestSuccessful: true,
        error: {}
      }
    });

  const handleError = (state, action) =>
    updateObject(state, {
      [propName]: {
        isLoading: false,
        isLastRequestSuccessful: false,
        error: action.payload
      }
    });

  return {
    initialAsyncStatus,
    handleRequest,
    handleSuccess,
    handleError
  };
};

const fetchStatusProps = setUpAsyncStatusProp('fetchStatus');
const createStatusProps = setUpAsyncStatusProp('createStatus');

const initialAsyncStatus = {
  ...fetchStatusProps.initialAsyncStatus,
  ...createStatusProps.initialAsyncStatus
};

const handleFetchStudySetRequest = fetchStatusProps.handleRequest;
const handleFetchStudySetSuccess = fetchStatusProps.handleSuccess;
const handleFetchStudySetError = fetchStatusProps.handleError;
const handleCreateStudySetRequest = createStatusProps.handleRequest;
const handleCreateStudySetSuccess = createStatusProps.handleSuccess;
const handleCreateStudySetError = createStatusProps.handleError;

export {
  initialAsyncStatus,
  handleFetchStudySetRequest,
  handleFetchStudySetSuccess,
  handleFetchStudySetError,
  handleCreateStudySetRequest,
  handleCreateStudySetSuccess,
  handleCreateStudySetError
};
