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

const handleFetchStudyClassRequest = fetchStatusProps.handleRequest;
const handleFetchStudyClassSuccess = fetchStatusProps.handleSuccess;
const handleFetchStudyClassError = fetchStatusProps.handleError;
const handleCreateStudyClassRequest = createStatusProps.handleRequest;
const handleCreateStudyClassSuccess = createStatusProps.handleSuccess;
const handleCreateStudyClassError = createStatusProps.handleError;
const handleUpdateStudyClassRequest = updateStatusProps.handleRequest;
const handleUpdateStudyClassSuccess = updateStatusProps.handleSuccess;
const handleUpdateStudyClassError = updateStatusProps.handleError;
const handleDeleteStudyClassRequest = deleteStatusProps.handleRequest;
const handleDeleteStudyClassSuccess = deleteStatusProps.handleSuccess;
const handleDeleteStudyClassError = deleteStatusProps.handleError;

export {
  initialAsyncStatus,
  handleFetchStudyClassRequest,
  handleFetchStudyClassSuccess,
  handleFetchStudyClassError,
  handleCreateStudyClassRequest,
  handleCreateStudyClassSuccess,
  handleCreateStudyClassError,
  handleUpdateStudyClassRequest,
  handleUpdateStudyClassSuccess,
  handleUpdateStudyClassError,
  handleDeleteStudyClassRequest,
  handleDeleteStudyClassSuccess,
  handleDeleteStudyClassError
};
