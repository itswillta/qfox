/* eslint-disable operator-linebreak */
import React from 'react';

import deburr from 'lodash/deburr';
import Downshift from 'downshift';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

const users = [
  { username: 'huytq' },
  { username: 'huyenpk' },
  { username: 'hoaint' },
  { username: 'anhmgb' }
];

const UserDownshift = ({ classes }) => {
  const renderInput = inputProps => {
    const { InputProps, ref, ...other } = inputProps;
    return (
      <TextField
        InputProps={{
          inputRef: ref,
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput
          },
          ...InputProps
        }}
        {...other}
      />
    );
  };

  const renderSuggestion = ({
    user,
    index,
    itemProps,
    highlightedIndex,
    selectedItem
  }) => {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(user.username) > -1;

    return (
      <MenuItem
        {...itemProps}
        key={user.username}
        selected={isHighlighted}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
      >
        {user.username}
      </MenuItem>
    );
  };

  const getSuggestions = value => {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
    const userChoose = users.filter(user => {
      const keep =
        count < 5 &&
        user.username.slice(0, inputLength).toLowerCase() === inputValue;
      if (keep) {
        count += 1;
      }

      return keep;
    });

    return inputLength === 0 ? [] : userChoose;
  };
  return (
    <Downshift>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem
      }) => (
        <div className={classes.container}>
          {renderInput({
            fullWidth: true,
            classes,
            InputProps: getInputProps({ placeholder: 'Enter a username' })
          })}
          <div {...getMenuProps()}>
            {isOpen && (
              <Paper className={classes.paper} square>
                {getSuggestions(inputValue).map((user, index) =>
                  renderSuggestion({
                    user,
                    index,
                    itemProps: getItemProps({ item: user.username }),
                    highlightedIndex,
                    selectedItem
                  })
                )}
              </Paper>
            )}
          </div>
        </div>
      )}
    </Downshift>
  );
};

export default UserDownshift;
