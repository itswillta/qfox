import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
    button: {
        padding: theme.spacing(1.5),
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
        fontSize: '18px',
        textTransform: 'none'
    },
    rightIcon: {
        marginLeft: theme.spacing(2),
        width: '7%',
        height: 'auto'
    },
    iconSmall: {
        fontSize: 20,
    },
}));
