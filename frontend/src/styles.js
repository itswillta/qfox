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
    },
    '.bold-text': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '.flex-grow': {
      flexGrow: 1
    },
    '.help-cursor': {
      cursor: 'help'
    },
    '.no-padding': {
      padding: '0 !important'
    },
    '.no-underline': {
      textDecoration: 'none'
    },
    '.uppercased-text': {
      textTransform: 'uppercase'
    },
    '.margin-bottom': {
      marginBottom: theme.spacing(1)
    }
  }
});
