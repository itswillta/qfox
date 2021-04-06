import React from 'react';
import classnames from 'classnames';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import VerticalDivider from '../../../../../components/VerticalDivider';

const TermCard = ({ classes, term, colorClass }) => {
  const termCount = term.correct - term.missed;
  let termCountText;

  if (termCount > 0) {
    termCountText = `+${termCount}`;
  } else if (termCount < 0) {
    termCountText = `-${termCount}`;
  } else if (termCount === 0) {
    termCountText = '0';
  } else {
    termCountText = '?';
  }

  return (
    <Paper className={classes.termCard}>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Typography
            variant="h6"
            className={classnames(classes[colorClass], classes.termCorrectCount)}
          >
            {termCountText}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1">{term.term}</Typography>
        </Grid>
        <VerticalDivider />
        <Grid item className="flex-grow">
          <Typography variant="body1">{term.definition}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TermCard;
