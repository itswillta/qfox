import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%'
  },
  header: {
    width: 'calc(100% - 128px)',
    backgroundColor: '#ffffff',
    padding: theme.spacing(8),
    zIndex: 0
  },
  headerText: {
    fontWeight: theme.typography.fontWeightMedium
  },
  basicFieldGroup: {
    marginTop: theme.spacing(1)
  },
  headerCreateButton: {
    padding: theme.spacing(1.5, 3)
  },
  body: {
    padding: theme.spacing(3, 8)
  },
  termCard: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(4),
    '&:hover': {
      backgroundColor: theme.palette.grey[50],
      '& $termNumber': {
        display: 'none'
      },
      '& $termDeleteButton': {
        display: 'block'
      }
    }
  },
  termFieldDescription: {
    color: theme.palette.grey[600],
    letterSpacing: '1.2px',
    fontWeight: theme.typography.fontWeightMedium
  },
  iconActionButton: {},
  termNumber: {
    display: 'flex',
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  termDeleteButton: {
    display: 'none'
  }
}));
