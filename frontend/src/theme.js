import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import deepOrange from '@material-ui/core/colors/deepOrange';

const initialCustomTheme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: deepOrange
  },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
  }
});

export default initialCustomTheme;
