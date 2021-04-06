/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import SearchIcon from '@material-ui/icons/Search';

import StudySetCard from './studySetList/StudySetCard';
import useStyles from './studySetList/StudySetList.styles';
import { getGroupedByTimeStudySets } from '../utils/groupByTime/studySets';
import { fuseFilterStudySets } from './studySetList/fuseSearch';
import { isInClass } from './studySetList/isInClass';

const StudySetGroup = ({
  classes,
  noGrouping,
  groupTitle,
  studySets,
  type,
  handleRemoveFromClass,
  handleAddToClass,
  studyClass
}) => (
  <React.Fragment>
    {!noGrouping && (
      <Grid container className={classes.groupTitle} alignItems="center">
        <Grid item>
          <Typography variant="body2" className="bold-text" color="textSecondary">
            {groupTitle}
          </Typography>
        </Grid>
        <Grid item className={classes.divider} />
      </Grid>
    )}
    {studySets.map(studySet => (
      <Grid item key={studySet.id}>
        <StudySetCard
          classes={classes}
          studySet={studySet}
          type={type}
          handleAddToClass={handleAddToClass}
          isInClass={type === 'addToClass' ? isInClass(studyClass, studySet.id) : false}
          handleRemoveFromClass={handleRemoveFromClass}
        />
      </Grid>
    ))}
  </React.Fragment>
);

const StudySetList = ({
  studySets,
  listTitle = 'Your study sets',
  type = 'normal',
  handleAddToClass,
  handleRemoveFromClass,
  studyClass,
  noGrouping
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [filterInput, setFilterInput] = useState('');

  const handleFilterInputChange = e => {
    setFilterInput(e.target.value);
  };

  let filteredStudySets = studySets;

  if (filterInput.length > 1) {
    filteredStudySets = fuseFilterStudySets(studySets, filterInput);
  }

  const groupedByTimeStudySets = !noGrouping && getGroupedByTimeStudySets(filteredStudySets);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item>
            <Typography variant="h5" className="bold-text">
              {t(listTitle)}
            </Typography>
          </Grid>
          {type !== 'search' && (
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
          )}
        </Grid>
      </Grid>
      {noGrouping && (
        <StudySetGroup
          classes={classes}
          noGrouping
          studySets={filteredStudySets}
          handleRemoveFromClass={handleRemoveFromClass}
          handleAddToClass={handleAddToClass}
          studyClass={studyClass}
          type={type}
        />
      )}
      {!noGrouping && groupedByTimeStudySets.thisWeek.length > 0 && (
        <StudySetGroup
          classes={classes}
          groupTitle="This week"
          studySets={groupedByTimeStudySets.thisWeek}
          handleRemoveFromClass={handleRemoveFromClass}
          type={type}
        />
      )}
      {!noGrouping && groupedByTimeStudySets.thisMonth.length > 0 && (
        <StudySetGroup
          classes={classes}
          groupTitle="This month"
          studySets={groupedByTimeStudySets.thisMonth}
          handleRemoveFromClass={handleRemoveFromClass}
          type={type}
        />
      )}
      {!noGrouping &&
        Object.keys(groupedByTimeStudySets.otherMonths)
          .reverse()
          .map(
            month =>
              groupedByTimeStudySets.otherMonths[month].length > 0 && (
                <StudySetGroup
                  key={month}
                  classes={classes}
                  groupTitle={`In ${moment()
                    .month(month)
                    .format('MMMM')} ${moment().year()}`}
                  studySets={groupedByTimeStudySets.otherMonths[month]}
                  handleRemoveFromClass={handleRemoveFromClass}
                  type={type}
                />
              )
          )}
      {!noGrouping &&
        Object.keys(groupedByTimeStudySets.otherYears)
          .reverse()
          .map(
            year =>
              groupedByTimeStudySets.otherYears[year].length > 0 && (
                <StudySetGroup
                  key={year}
                  classes={classes}
                  groupTitle={`In ${year}`}
                  studySets={groupedByTimeStudySets.otherYears[year]}
                  handleRemoveFromClass={handleRemoveFromClass}
                  type={type}
                />
              )
          )}
    </Grid>
  );
};

export default StudySetList;
