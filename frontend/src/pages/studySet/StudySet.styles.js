import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  header: {
    width: 'calc(100% - 128px)',
    backgroundColor: '#ffffff',
    padding: theme.spacing(6, 8),
    zIndex: 0
  },
  body: {
    padding: theme.spacing(4, 8),
    position: 'relative'
  },
  fab: {
    boxShadow: `${theme.shadows[2]} !important`
  },
  termCard: {
    position: 'relative',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(1.5)
  },
  termGroupContainer: {
    flexWrap: 'inherit'
  },
  termGroupTitle: {
    marginBottom: theme.spacing(1)
  },
  termCorrectCount: {
    margin: theme.spacing(1)
  },
  oftenMissedColor: {
    color: '#f44336'
  },
  sometimesMissedColor: {
    color: '#ff6e40'
  },
  rarelyMissedColor: {
    color: theme.palette.primary.main
  },
  alwaysCorrectColor: {
    color: '#2e7d32'
  },
  noAnswersYetColor: {},
  classLink: {
    '&:hover': {
      color: `${theme.palette.secondary.light} !important`,
      transition: 'color 0.2s ease-in-out',
      cursor: 'pointer'
    }
  }
}));
