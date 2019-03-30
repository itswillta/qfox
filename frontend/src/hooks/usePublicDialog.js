import { useEffect } from 'react';

const usePublicDialog = (authState, toggleDialog, resetForm) => {
  const closeDialog = () => {
    if (typeof resetForm === 'function') {
      resetForm();
    }
    toggleDialog(false)();
  };

  useEffect(() => {
    if (authState.isAuthenticated) {
      toggleDialog(false)();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);

  return {
    onClose: closeDialog
  };
};

export default usePublicDialog;
