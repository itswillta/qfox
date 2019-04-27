import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const SearchBox = ({ classes }) => (
  <div className={classes.search}>
    <div className={classes.searchIcon}>
      <SearchIcon />
    </div>
    <InputBase
      placeholder="Search"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput
      }}
    />
  </div>
);

export default SearchBox;
