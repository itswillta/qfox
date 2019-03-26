import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  drawer: {
    width: '250px',
    flexShrink: 0
  },
  drawerPaper: {
    boxShadow: theme.shadows[6],
    background: 'white',
    border: 'none',
    color: theme.palette.grey[200],
    position: 'fixed',
    width: '250px',
    top: '64px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      top: 0
    }
  },
  list: {},
  listItem: {
    color: theme.palette.grey[300]
  },
  selected: {
    background: `${theme.palette.secondary.light} !important`,
    color: theme.palette.secondary.contrastText
  },
  listItemIcon: {
    color: 'inherit',
    marginRight: 0
  },
  listItemText: {
    color: 'inherit'
  },
  nested: {
    paddingLeft: 24 + theme.spacing(1)
  },
  verticalCompact: {
    paddingTop: 0,
    paddingBottom: 0
  },
  section: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  },
  sectionName: {
    color: theme.palette.grey[700]
  },
  grow: {
    flexGrow: 1
  }
}));
