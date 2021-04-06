/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useRedux, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AutoRenew from '@material-ui/icons/Autorenew';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';

// import QuestionType from './learnControl/QuestionType';

import { userTermActions } from '../../states/userTerm';

const LearnControl = ({
  classes,
  terms,
  remaining,
  familiar,
  mastered,
  handleChangeRemaining,
  handleChangeFamiliar,
  handleChangeMasteres
}) => {
  useEffect(() => {
    handleChangeRemaining(terms.length);
  }, []);

  const authState = useSelector(state => state.auth);

  const [userTermAsyncStatus, { updateUserTerm }] = useRedux(
    state => state.userAsyncStatus,
    {
      updateUserTerm: ({ userId, termId, updateFields }) =>
        userTermActions.updateUserTerm.pending({ userId, termId, updateFields })
    }
  );

  const handleStartOver = () => {
    handleChangeFamiliar(0);
    handleChangeMasteres(0);
    terms.forEach((element, index) => {
      updateUserTerm({
        userId: authState.userProfile.id,
        termId: element.id,
        updateFields: { reset: 1 }
      });
    });
  };

  return (
    <div className={classes.learnControl}>
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row" justify="center">
            <Grid item className={classes.gridItemControl}>
              <AutoRenew color="primary" fontSize="large" />
            </Grid>
            <Grid item className={classes.gridItemControl}>
              <Typography variant="h4">Learn</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.remaining}>
          <Typography variant="h6">{remaining}</Typography>
          <Typography variant="h6">REMAINING</Typography>
          <ArrowDownward fontSize="large" color="disabled" />
          <Typography variant="h6">{familiar}</Typography>
          <Typography variant="h6">FAMILIAR</Typography>
          <ArrowDownward fontSize="large" color="disabled" />
          <Typography variant="h6">{mastered}</Typography>
          <Typography variant="h6">MASTERED</Typography>
        </Grid>
        <Grid item>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleStartOver}
          >
            Start over
          </Button>
        </Grid>
        {/* <QuestionType classes={classes} /> */}
      </Grid>
    </div>
  );
};

export default LearnControl;
