/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useStyles from './Header.styles';

const Header = ({ restartGame, timeCounter }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className="grid-header-container">
      <div className="justify-left timer" />
      <div className="justify-center game-status-text" />
      <div className="justify-end">
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="h5" component="h3">
                {t('Time')}: {timeCounter}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={restartGame} className="restart-button">
              {t('Restart Game')}
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
