import React from 'react';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import StudySetCard from './studySetList/StudySetCard';
import useStyles from './studySetList/StudySetList.styles';
import { getGroupedByTimeStudySets } from '../utils/groupByTime/studySets';

const StudySetGroup = ({ classes, groupTitle, studySets }) => (
  <React.Fragment>
    <Grid container className={classes.groupTitle} alignItems="center">
      <Grid item>
        <Typography variant="body2" className="bold-text" color="textSecondary">
          {groupTitle}
        </Typography>
      </Grid>
      <Grid item className={classes.divider} />
    </Grid>
    {studySets.map(studySet => (
      <Grid item key={studySet.id}>
        <StudySetCard classes={classes} studySet={studySet} />
      </Grid>
    ))}
  </React.Fragment>
);

const StudySetList = ({ studySets }) => {
  const classes = useStyles();

  const groupedByTimeStudySets = getGroupedByTimeStudySets(studySets);

  return (
    <Grid container direction="column" spacing={2}>
      {groupedByTimeStudySets.thisWeek.length > 0 && (
        <StudySetGroup
          classes={classes}
          groupTitle="This week"
          studySets={groupedByTimeStudySets.thisWeek}
        />
      )}
      {groupedByTimeStudySets.thisMonth.length > 0 && (
        <StudySetGroup
          classes={classes}
          groupTitle="This month"
          studySets={groupedByTimeStudySets.thisMonth}
        />
      )}
      {Object.keys(groupedByTimeStudySets.otherMonths)
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
              />
            )
        )}
      {Object.keys(groupedByTimeStudySets.otherYears)
        .reverse()
        .map(
          year =>
            groupedByTimeStudySets.otherYears[year].length > 0 && (
              <StudySetGroup
                key={year}
                classes={classes}
                groupTitle={`In ${year}`}
                studySets={groupedByTimeStudySets.otherYears[year]}
              />
            )
        )}
    </Grid>
  );
};

export default StudySetList;
