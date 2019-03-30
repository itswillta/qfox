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
    '.dialog-paper': {
      width: '40%',
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    }
  }
});
