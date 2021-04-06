import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import People from '@material-ui/icons/People';

const LeftStudyClassItemHeader = ({
  classes,
  studySetsLength,
  membersLength,
  studyClassName,
  tabValue,
  handleChangeTab
}) => (
  <Grid item>
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <Typography variant="h6">
              {studySetsLength} {studySetsLength > 1 ? 'sets' : 'set'}
            </Typography>
          </Grid>
          <Grid item className={classes.verticalDividerContainer}>
            <div className={classes.verticalDivider} />
          </Grid>
          <Grid item>
            <Typography variant="h6">
              {membersLength} {membersLength > 1 ? 'members' : 'member'}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h5" className="bold-text">
          <People color="primary" className={classes.icon} fontSize="large" />
          {studyClassName}
        </Typography>
      </Grid>

      <Grid item>
        <Tabs
          classes={{ indicator: classes.tabIndicator }}
          className={classes.tabs}
          value={tabValue}
          onChange={handleChangeTab}
        >
          <Tab
            className={classes.tab}
            label="Study Sets"
            classes={{ selected: classes.selectedTab }}
          />
          <Tab
            className={classes.tab}
            label="Members"
            classes={{ selected: classes.selectedTab }}
          />
        </Tabs>
      </Grid>
    </Grid>
  </Grid>
);

export default LeftStudyClassItemHeader;
