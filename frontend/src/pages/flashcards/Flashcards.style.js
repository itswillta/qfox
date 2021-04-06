import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  flashcardsControls: {
    backgroundColor: '#ffffff',
    height: '100%'
  },
  flashcards: {
    margin: theme.spacing(2)
  },
  flashcardItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: '4em',
    textAlign: 'center'
  },
  girdItemBack: {
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
    padding: theme.spacing(2)
  },
  gridItem: {
    padding: theme.spacing(2)
  },
  gridContainerBoth: {
    height: '100%'
  },
  gridItemBoth: {
    height: '50%',
    textAlign: 'center'
  },
  hr: {
    width: '100%',
    size: '5px',
    align: 'center',
    color: theme.palette.grey[500]
  }
}));
