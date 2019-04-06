import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    width: 'calc(100% - 128px)',
    backgroundColor: 'white',
    padding: theme.spacing(8),
    zIndex: 0
  },
  headerText: {
    fontWeight: 500
  },
  headerCreateButton: {
    padding: theme.spacing(1.5, 3)
  }
}));
