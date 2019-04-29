import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import InfoIcon from '@material-ui/icons/Info';
import AddPictureIcon from '@material-ui/icons/AddPhotoAlternate';
import DeleteIcon from '@material-ui/icons/Delete';

import InputField from '../../InputField';

const TermCard = ({ classes, index }) => {
  console.log(`${index} is being rerendered`);

  return (
    <Paper className={classes.termCard}>
      <Grid container alignItems="center" spacing={5}>
        <Grid item className="no-padding">
          <Typography className={classes.termNumber} variant="h6" color="textSecondary">
            {index + 1}
          </Typography>
          <Tooltip title="Delete this card">
            <IconButton className={classes.termDeleteButton} onClick={() => {}}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item className="flex-grow">
          <InputField
            name={`terms[${index}].term`}
            variant="standard"
            margin="none"
            placeholder="Enter a term"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some tips here">
                    <div className="help-cursor">
                      <InfoIcon color="action" />
                    </div>
                  </Tooltip>
                </InputAdornment>
              )
            }}
          />
          <Typography className={classes.termFieldDescription} variant="caption">
            TERM
          </Typography>
        </Grid>
        <Grid item className="flex-grow">
          <InputField
            name={`terms[${index}].definition`}
            variant="standard"
            margin="none"
            placeholder="Enter one or more definitions"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some tips here">
                    <div className="help-cursor">
                      <InfoIcon color="action" />
                    </div>
                  </Tooltip>
                </InputAdornment>
              )
            }}
          />
          <Typography className={classes.termFieldDescription} variant="caption">
            DEFINITION
          </Typography>
        </Grid>
        <Grid item className="no-padding">
          <IconButton className={classes.iconActionButton} onClick={() => {}}>
            <AddPictureIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default React.memo(TermCard);
