import React from 'react';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import defaultProfilePicture from '/images/profile-default.jpg';

const StudySetHeader = ({ authState, classes }) => {
  const [value, setValue] = React.useState(2);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.header}>
      <Grid container>
        <Grid item className={classes.leftContainer}>
          <Avatar
            alt="Profile Picture"
            src={authState.userProfile.profilePictureUrl || defaultProfilePicture}
            className={classes.headerAvatar}
          />
        </Grid>
        <Grid item className={classes.rightContainer}>
          <Typography variant="h4">{authState.userProfile.name}</Typography>
          <Tabs
            classes={{ indicator: classes.tabIndicator }}
            className={classes.tabs}
            value={value}
            onChange={handleChange}
          >
            <Tab
              className={classes.tab}
              label="All (24)"
              classes={{ selected: classes.selectedTab }}
            />
            <Tab
              className={classes.tab}
              label="Created (21)"
              classes={{ selected: classes.selectedTab }}
            />
            <Tab
              className={classes.tab}
              label="Others (3)"
              classes={{ selected: classes.selectedTab }}
            />
          </Tabs>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  authState: state.auth
});

export default connect(mapStateToProps)(StudySetHeader);
