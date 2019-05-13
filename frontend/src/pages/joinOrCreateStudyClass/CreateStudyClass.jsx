/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CreateStudyClass = ({ classes }) => {
  const { t } = useTranslation();
  const [permission, setPermission] = useState(true);

  const handleChangePermission = e => {
    setPermission(e.target.checked);
  };

  return (
    <Paper className={classes.paper}>
      <Grid container direction="column">
        <Grid item className={classes.gridItem}>
          <Typography variant="h3">{t('Create a new class')}</Typography>
        </Grid>
        <Grid item className={classes.gridItem}>
          <TextField placeholder="Enter a class name" helperText="CLASS NAME" />
        </Grid>
        <Grid item className={classes.gridItem}>
          <TextField
            placeholder="Enter a description (optional)"
            helperText="DESCRIPTION"
          />
        </Grid>
        <Grid item className={classes.gridItem}>
          <FormControlLabel
            control={
              <Checkbox
                checked={permission}
                onChange={handleChangePermission}
                color="primary"
              />
            }
            label="Allow other members to add sets and new members."
          />
        </Grid>
        <Grid item className={classes.gridItem}>
          <Button variant="contained" color="primary">
            {t('Create class')}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CreateStudyClass;
