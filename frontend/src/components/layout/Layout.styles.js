import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      marginLeft: '250px'
    }
  }
}));
