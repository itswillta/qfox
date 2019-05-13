import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useStyles from './dashboard/Dashboard.styles';

import logoWithBg from '/images/logo-with-bg.svg';
import api from '../services/restClient';
import StudySetList from '../components/StudySetList';

const StudySetSearch = ({ location: { search } }) => {
  const classes = useStyles();

  const [studySets, setStudySets] = useState([]);

  const params = new URLSearchParams(search);
  const query = params.get('query');

  useEffect(() => {
    const searchStudySets = async () => {
      const searchResults = await api.custom(`study-sets/search?query=${query}`).get();

      setStudySets(searchResults.body().data().studySets);
    };

    if (query) searchStudySets();
  }, [query]);

  return (
    <div className={classes.root}>
      {studySets.length > 0 && (
        <StudySetList
          studySets={studySets}
          type="search"
          noGrouping
          listTitle={`Search Results (${studySets.length})`}
        />
      )}
      {studySets.length === 0 && (
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

export default withRouter(StudySetSearch);
