import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useResponsiveDialog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return {
    fullScreen: isMobile,
    PaperProps: {
      className: 'dialog-paper'
    }
  };
};

export default useResponsiveDialog;
