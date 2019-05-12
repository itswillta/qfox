import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  grid: {
    margin: theme.spacing(2)
  },
  gridTextField: {
    margin: theme.spacing(2),
    flexGrow: 1
  },
  root: {
    flexGrow: 1
  },
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 250
  },
  paper: {
    position: 'absolute',
    zIndex: 10,
    left: 0,
    right: 0
  },
  inputRoot: {
    flexWrap: 'wrap'
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1
  }
}));
