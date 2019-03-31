import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  signUpButton: {
    marginLeft: theme.spacing(1)
  },
  accountMenu: {
    textTransform: 'none'
  },
  accountMenuExpand: {
    height: theme.spacing(4),
    paddingLeft: '0 !important'
  },
  accountMenuItemIcon: {
    marginRight: '0 !important'
  },
  accountMenuItemText: {
    padding: `0 ${theme.spacing(1)}px !important`
  },
  link: {
    textDecoration: 'none'
  }
}));
