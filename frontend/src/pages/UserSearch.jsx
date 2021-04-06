import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useStyles from './dashboard/Dashboard.styles';

import logoWithBg from '/images/logo-with-bg.svg';
import api from '../services/restClient';
import UserList from '../components/UserList';

const UserSearch = ({ location: { search } }) => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  const params = new URLSearchParams(search);
  const query = params.get('query');

  useEffect(() => {
    const searchUsers = async () => {
      const searchResults = await api.custom(`users/search?query=${query}`).get();

      setUsers(searchResults.body().data().users);
    };

    if (query) searchUsers();
  }, [query]);

  return (
    <div className={classes.root}>
      {users.length > 0 && (
        <UserList users={users} listTitle={`Search Results (${users.length})`} type="search" />
      )}
      {users.length === 0 && (
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

export default withRouter(UserSearch);
