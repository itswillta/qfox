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
const updateStatusProps = setUpAsyncStatusProp('updateStatus');
const deleteStatusProps = setUpAsyncStatusProp('deleteStatus');

const initialAsyncStatus = {
  ...fetchStatusProps.initialAsyncStatus,
  ...createStatusProps.initialAsyncStatus,
  ...updateStatusProps.initialAsyncStatus,
  ...deleteStatusProps.initialAsyncStatus
};

const handleFetchStudySetRequest = fetchStatusProps.handleRequest;
const handleFetchStudySetSuccess = fetchStatusProps.handleSuccess;
const handleFetchStudySetError = fetchStatusProps.handleError;
const handleCreateStudySetRequest = createStatusProps.handleRequest;
const handleCreateStudySetSuccess = createStatusProps.handleSuccess;
const handleCreateStudySetError = createStatusProps.handleError;
const handleUpdateStudySetRequest = updateStatusProps.handleRequest;
const handleUpdateStudySetSuccess = updateStatusProps.handleSuccess;
const handleUpdateStudySetError = updateStatusProps.handleError;
const handleDeleteStudySetRequest = deleteStatusProps.handleRequest;
const handleDeleteStudySetSuccess = deleteStatusProps.handleSuccess;
const handleDeleteStudySetError = deleteStatusProps.handleError;

export {
  initialAsyncStatus,
  handleFetchStudySetRequest,
  handleFetchStudySetSuccess,
  handleFetchStudySetError,
  handleCreateStudySetRequest,
  handleCreateStudySetSuccess,
  handleCreateStudySetError,
  handleUpdateStudySetRequest,
  handleUpdateStudySetSuccess,
  handleUpdateStudySetError,
  handleDeleteStudySetRequest,
  handleDeleteStudySetSuccess,
  handleDeleteStudySetError
};
