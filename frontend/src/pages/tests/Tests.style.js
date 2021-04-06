import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  testsControls: {
    padding: `${theme.spacing(2)}px 0`,
    '@media (min-height: 300px)': {
      position: 'sticky',
      top: 0,
      bottom: 0,
      height: '100vh',
      overflowY: 'auto',
      backgroundColor: '#ffffff'
    }
  },
  testsContent: {
    margin: `0 ${theme.spacing(2)}px`,
    backgroundColor: '#ffffff'
  },
  gridItem: {
    padding: theme.spacing(4)
  },
  button: {
    padding: theme.spacing(2)
  },
  girdItemBack: {
    borderBottom: `1px solid ${theme.palette.grey[500]}`
  },
  gridItemControls: {
    padding: theme.spacing(2)
  },
  grade: {
    textAlign: 'center'
  },
  gridItemQusetion: {
    padding: `${theme.spacing(2)}px ${theme.spacing(8)}px`
  }
}));
