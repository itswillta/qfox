import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  learnControl: {
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
  gridItemControl: {
    padding: theme.spacing(2)
  },
  remaining: {
    textAlign: 'center',
    padding: `${theme.spacing(2)}px 0`
  },
  learnContent: {
    margin: theme.spacing(2)
  },
  learnContentItemGridContainer: {
    backgroundColor: '#ffffff',
    height: '500px',
    padding: theme.spacing(4)
  },
  learnContentButtonAnswer: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    width: '150px'
  },
  answerHeader: {
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
    padding: theme.spacing(2)
  },
  answerBody: {
    padding: theme.spacing(2)
  }
}));
