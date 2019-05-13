import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useStyles from './dashboard/Dashboard.styles';

import logoWithBg from '/images/logo-with-bg.svg';
import api from '../services/restClient';
import StudyClassList from './studyClasses/studyClassBody/StudyClassList';

const StudyClassSearch = ({ location: { search } }) => {
  const classes = useStyles();

  const [studyClasses, setStudyClasses] = useState([]);

  const params = new URLSearchParams(search);
  const query = params.get('query');

  useEffect(() => {
    const searchStudyClasses = async () => {
      const searchResults = await api.custom(`study-classes/search?query=${query}`).get();

      setStudyClasses(searchResults.body().data().classes);
    };

    if (query) searchStudyClasses();
  }, [query]);

  return (
    <div className={classes.root}>
      {studyClasses.length > 0 && (
        <Grid container direction="column">
          <StudyClassList
            studyClasses={studyClasses}
            type="search"
            listTitle={`Search Results (${studyClasses.length})`}
          />
        </Grid>
      )}
      {studyClasses.length === 0 && (
        <Grid spacing={2} container justify="center" alignItems="center" direction="column">
          <Grid item>
            <Typography variant="h4" className="bold-text">
              No search results
            </Typography>
          </Grid>
          <Grid item>
            <img src={logoWithBg} width="400px" height="auto" alt="logo" />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default withRouter(StudyClassSearch);
