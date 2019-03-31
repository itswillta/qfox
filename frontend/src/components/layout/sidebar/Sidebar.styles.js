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
    width: '250px',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      width: '100%',
      top: 0
    }
  },
  sidebarItemList: {
    padding: `${theme.spacing(2)}px 0`,
    '@media (min-height: 300px)': {
      position: 'sticky',
      top: 0,
      bottom: 0,
      height: '100vh',
      overflowY: 'auto'
    }
  },
  listItem: {
    color: theme.palette.grey[200]
  },
  selected: {
    background: `${theme.palette.secondary.light} !important`,
    color: theme.palette.secondary.contrastText,
    '& $listItemText': {
      color: 'inherit'
    },
    '& $listItemIcon': {
      color: 'inherit'
    }
  },
  listItemIcon: {
    color: theme.palette.primary.main,
    marginRight: 0
  },
  listItemText: {
    color: theme.palette.grey[800]
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
  },
  divider: {
    margin: `${theme.spacing(1)}px 0`
  }
}));
