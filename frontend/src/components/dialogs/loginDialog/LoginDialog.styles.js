import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  dialogPaper: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}));
