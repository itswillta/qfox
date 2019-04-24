import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  card: {
    boxSizing: 'border-box',
    padding: theme.spacing(2),
    borderBottom: `${theme.spacing(0.8)}px solid white`,
    '&:hover': {
      background: theme.palette.grey[100],
      cursor: 'pointer',
      transition: 'all 0.1s ease-in-out',
      borderBottom: `${theme.spacing(0.8)}px solid ${theme.palette.secondary.light}`
    }
  },
  avatar: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5)
  }
}));
