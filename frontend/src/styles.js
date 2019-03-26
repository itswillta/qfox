import { makeStyles } from '@material-ui/styles';
import theme from './theme';

export default makeStyles({
  '@global': {
    '.button-secondary': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main
      }
    },
    '.cssjss-advanced-global-child': {
      height: 8,
      backgroundColor: 'red'
    }
  }
});
