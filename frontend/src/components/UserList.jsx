import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import SearchIcon from '@material-ui/icons/Search';

import UserCard from './userList/UserCard';
import useStyles from './userList/UserList.styles';
import { fuseFilterUsers } from './userList/fuseSearch';

const UserList = ({ users, listTitle = 'List of users', type = 'normal' }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [filterInput, setFilterInput] = useState('');

  const handleFilterInputChange = e => {
    setFilterInput(e.target.value);
  };

  let filteredUsers = users;

  if (filterInput.length > 1) {
    filteredUsers = fuseFilterUsers(users, filterInput);
  }

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
      {filteredUsers.map(user => (
        <Grid item key={user.id}>
          <UserCard classes={classes} user={user} type={type} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
