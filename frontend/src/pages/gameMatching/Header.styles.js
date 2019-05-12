import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  paper: {
    ...theme.mixins.gutters(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginRight: '80px'
  }
}));
