import React from 'react';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';

import { ThemeProvider } from '@material-ui/styles';

import Notification from './components/Notification';

import Dialogs from './components/Dialogs';
import AppRouter from './routers/AppRouter';
import theme from './theme';
import useStyles from './styles';

const App = ({ store }) => {
  useStyles();

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Provider store={store}>
          <AppRouter />
          <Dialogs />
        </Provider>
        <Notification />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
