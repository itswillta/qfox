import React from 'react';
import { useTranslation } from 'react-i18next';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import InfoIcon from '@material-ui/icons/Info';
// import AddPictureIcon from '@material-ui/icons/AddPhotoAlternate';
import DeleteIcon from '@material-ui/icons/Delete';

import InputField from '../../../InputField';

const TermCard = ({ classes, index, namePrefix, isRemovable, remove }) => {
  const { t } = useTranslation();

  return (
    <Paper className={classes.termCard}>
      <Grid container alignItems="center" spacing={5}>
        <Grid item className="no-padding">
          <Typography className={classes.termNumber} variant="h6" color="textSecondary">
            {index + 1}
          </Typography>
          <Tooltip title={isRemovable ? t('Delete this card') : t('You cannot delete this card')}>
            <div>
              <IconButton
                className={classes.termDeleteButton}
                disabled={!isRemovable}
                onClick={remove}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Tooltip>
        </Grid>
        <Grid item className="flex-grow">
          <InputField
            name={`${namePrefix}.term`}
            variant="standard"
            margin="none"
            placeholder="Enter a term"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title={t('Some tips here')}>
                    <div className="help-cursor">
                      <InfoIcon color="action" />
                    </div>
                  </Tooltip>
                </InputAdornment>
              )
            }}
          />
          <Typography className={classes.fieldDescription} variant="caption">
            {t('TERM')}
          </Typography>
        </Grid>
        <Grid item className="flex-grow">
          <InputField
            name={`${namePrefix}.definition`}
            variant="standard"
            margin="none"
            placeholder="Enter one or more definitions"
            multiline
            subscription={{ value: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title={t('Press "Shift + Enter" to add another definition')}>
                    <div className="help-cursor">
                      <InfoIcon color="action" />
                    </div>
                  </Tooltip>
                </InputAdornment>
              )
            }}
          />
          <Typography className={classes.fieldDescription} variant="caption">
            {t('DEFINITION')}
          </Typography>
        </Grid>
        {/* Temporarily commented out until this feature is added
          <Grid item className="no-padding">
          <IconButton className={classes.iconActionButton} onClick={() => {}}>
            <AddPictureIcon />
          </IconButton>
          </Grid>
        */}
      </Grid>
    </Paper>
  );
};

export default React.memo(TermCard);
