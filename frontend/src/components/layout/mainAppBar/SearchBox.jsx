/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { useTranslation } from 'react-i18next';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { redirectTo } from '../../../services/history';
import appRoutes from '../../../routers/appRoutes';

const SearchBox = ({ classes, location: { pathname } }) => {
  const { t } = useTranslation();

  const [searchInput, setSearchInput] = useState('');

  let searchMode = 'studySets';

  if (pathname.includes('/users/search')) {
    searchMode = 'users';
  } else if (pathname.includes('/study-classes/search')) {
    searchMode = 'studyClasses';
  }

  const handleSearchInputChange = e => setSearchInput(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (searchMode === 'studySets') {
      redirectTo(`${appRoutes.SearchStudySet.url}?query=${searchInput}`);
    } else if (searchMode === 'studyClasses') {
      redirectTo(`${appRoutes.SearchStudyClass.url}?query=${searchInput}`);
    } else {
      redirectTo(`${appRoutes.SearchUser.url}?query=${searchInput}`);
    }
  };

  return (
    <div className={classes.search}>
      <form name="searchForm" onSubmit={handleSubmit}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder={t(
            searchMode === 'users'
              ? 'Search users'
              : searchMode === 'studyClasses'
              ? 'Search classes'
              : 'Search study sets'
          )}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </form>
    </div>
  );
};

export default withRouter(SearchBox);
