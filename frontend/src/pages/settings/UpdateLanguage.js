import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Language from '@material-ui/icons/Language';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const languageOptions = [
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'vn',
    label: 'Tiếng Việt'
  }
];

const UpdateLanguage = ({ authState, classes }) => {
  const [language, setLanguage] = useState(authState.userProfile.language);

  const handleLanguageSelected = e => {
    setLanguage(e.target.value);
  };

  const handleSubmit = () => {
    console.log(language);
  };

  return (
    <React.Fragment>
      <Grid container direction="row" spacing={1} className={classes.grid}>
        <Grid item xs={3} align="center">
          <Language color="action" className={classes.icon} />
          <Typography
            variant="h5"
            color="textSecondary"
            className={classes.title}
          >
            Language
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography
              variant="h5"
              color="textSecondary"
              className={classes.title}
            >
              Choose your language
            </Typography>
            <Typography variant="subtitle1">
              Adjust the language you see in menus, dialogues and instructions
              and apply the corresponding date and time formats.
            </Typography>
            <TextField
              id="outlined-select-currency-native"
              select
              className={classes.textField}
              value={language}
              onChange={handleLanguageSelected}
              SelectProps={{
                native: true
              }}
              margin="normal"
              variant="outlined"
            >
              {languageOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <br />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={handleSubmit}
            >
              Change your language
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default UpdateLanguage;
