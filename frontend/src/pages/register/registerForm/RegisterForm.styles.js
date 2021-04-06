import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  registerButton: {
    padding: theme.spacing(1.5),
    marginTop: theme.spacing(2),
    fontWeight: 'bold',
    fontSize: '18px',
    textTransform: 'none'
  },
  rightIcon: {
    marginLeft: theme.spacing(2),
    width: '7%',
    height: 'auto'
  },
  iconSmall: {
    fontSize: 20,
  },
  loginSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2)
  },
  loginLink: {
    marginLeft: theme.spacing(0.5),
    textDecoration: 'none',
    color: theme.palette.primary.main
  }
}));
