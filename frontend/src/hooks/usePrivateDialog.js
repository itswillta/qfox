import { useEffect } from 'react';

const usePrivateDialog = (authState, toggleDialog, resetForm) => {
  const closeDialog = () => {
    if (typeof resetForm === 'function') {
      resetForm();
    }
    toggleDialog(false)();
  };

  useEffect(() => {
    if (!authState.isAuthenticated) {
      toggleDialog(false)();
    }
  }, [authState]);

  return {
    onClose: closeDialog
  };
};

export default usePrivateDialog;
