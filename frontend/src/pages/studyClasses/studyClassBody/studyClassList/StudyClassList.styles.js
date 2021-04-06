import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  card: {
    position: 'relative',
    boxSizing: 'border-box',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    borderBottom: `${theme.spacing(0.8)}px solid white`,
    '&:hover': {
      background: theme.palette.grey[100],
      transition: 'all 0.1s ease-in-out',
      borderBottom: `${theme.spacing(0.8)}px solid ${theme.palette.secondary.light}`
    }
  },
  clickableArea: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    '&:hover': {
      cursor: 'pointer'
    },
    zIndex: 1
  },
  higherZIndex: {
    zIndex: 2
  },
  infoSection: {
    marginTop: theme.spacing(0.5)
  },
  cardIcon: {
    paddingBottom: theme.spacing(1)
  },
  groupTitle: {
    padding: theme.spacing(0, 1),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(3),
    textTransform: 'uppercase',
    letterSpacing: '1.2px'
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    height: '1px'
  },
  avatar: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5)
  },
  verticalDividerContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  verticalDivider: {
    height: '70%',
    margin: theme.spacing(0, 1.5),
    borderRight: `2px solid ${theme.palette.grey[300]}`
  },
  icon: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(-1)
  }
}));
