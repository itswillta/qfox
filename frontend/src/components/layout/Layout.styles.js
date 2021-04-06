import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    minHeight: 'calc(100vh - 64px)'
  }
});
