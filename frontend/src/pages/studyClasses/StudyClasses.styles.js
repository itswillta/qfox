import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {},
  header: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(4)
  },
  leftContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerAvatar: {
    width: 108,
    height: 108,
    margin: theme.spacing(1)
  },
  rightContainer: {
    marginLeft: theme.spacing(1),
    padding: theme.spacing(2)
  },
  tabs: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.grey[50],
    border: `2px solid ${theme.palette.grey[500]}`,
    minHeight: 40,
    '& $tab:last-of-type': {
      borderRight: 'none'
    }
  },
  tabIndicator: {
    display: 'none'
  },
  tab: {
    borderRight: `2px solid ${theme.palette.grey[500]}`,
    minHeight: 40
  },
  selectedTab: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText
  },
  body: {
    padding: theme.spacing(4)
  }
}));
