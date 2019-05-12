import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import FilterNone from '@material-ui/icons/FilterNone';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const displayOptions = [
  {
    value: 'vi',
    label: 'Vietnamese'
  },
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'both',
    label: 'Both'
  }
];

const FlashcardsControls = ({
  classes,
  activeStep,
  maxSteps,
  answer,
  handleChangeAnswer,
  handleChangeAutoPlay
}) => {
  const handleChange = e => handleChangeAnswer(e.target.value);

  return (
    <div className={classes.flashcardsControls}>
      <Grid container direction="column">
        <Grid item className={classes.girdItemBack}>
          <Button fullWidth>
            <ArrowLeft color="primary" />
            Back
          </Button>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="row" justify="center">
            <Grid item className={classes.gridItem}>
              <FilterNone color="primary" fontSize="large" />
            </Grid>
            <Grid item className={classes.gridItem}>
              <Typography variant="h4">Cards</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <MobileStepper
            variant="progress"
            steps={maxSteps + 1}
            position="static"
            activeStep={activeStep + 1}
            LinearProgressProps={{
              color: 'primary',
              style: { height: '10px', width: '100%' }
            }}
          />
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography variant="body1">Progress</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                {activeStep + 1}/{maxSteps}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={handleChangeAutoPlay}
          >
            Play
          </Button>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Typography variant="h6">ANSWER WITH</Typography>
          <TextField
            fullWidth
            select
            value={answer}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          >
            {displayOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </div>
  );
};

export default FlashcardsControls;
