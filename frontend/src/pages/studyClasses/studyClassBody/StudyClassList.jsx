import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '@material-ui/icons/Search';

import useStyles from './studyClassList/StudyClassList.styles';
import StudyClassCard from './studyClassList/StudyClassCard';
import { fuseFilterStudyClasses } from './studyClassList/fuseSearch';

const StudyClassList = ({ studyClasses, listTitle = 'Your study classes' }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [filterInput, setFilterInput] = useState('');

  const handleFilterInputChange = e => {
    setFilterInput(e.target.value);
  };

  let filteredStudyClasses = studyClasses;

  if (filterInput.length > 1) {
    filteredStudyClasses = fuseFilterStudyClasses(studyClasses, filterInput);
  }

  return (
    <React.Fragment>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item>
            <Typography variant="h5" className="bold-text">
              {t(listTitle)}
            </Typography>
          </Grid>
          <Grid item className="flex-grow">
            <Grid container justify="flex-end">
              <Grid item>
                <TextField
                  value={filterInput}
                  onChange={handleFilterInputChange}
                  placeholder={t('Filter')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {filteredStudyClasses.map(studyClass => (
        <Grid item key={studyClass.id}>
          <StudyClassCard classes={classes} studyClass={studyClass} />
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default StudyClassList;
