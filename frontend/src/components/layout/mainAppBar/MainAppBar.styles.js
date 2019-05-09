import { makeStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1
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
  },
  createButton: {
    color: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(2)
  },
  createButtonIcon: {
    marginRight: theme.spacing(0.5)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    },
    flexGrow: 1
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    width: '100%'
  }
}));
