import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  },
  grid: {
    marginTop: theme.spacing(2)
  },
  icon: {
    width: 70,
    height: 70
  },
  button: {
    marginTop: theme.spacing(2)
  },
  fileInput: {
    display: 'none'
  },
  title: {
    fontWeight: 700
  },
  scale: {
    width: '100%',
    margin: '0'
  }
}));
