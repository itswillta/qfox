import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  closeDialogButton: {
    color: `${theme.palette.primary.contrastText} !important`
  },
  dialogTitle: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1)
  },
  dialogContent: {},
  dialogContentItem: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(2)
  },
  dialogTitleText: {
    color: `${theme.palette.primary.contrastText}`
  }
}));
