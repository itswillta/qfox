import React, { useState, useRef } from 'react';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import useStyles from './actionDropdown/ActionDropdown.styles';

const ActionDropdown = ({ dropdownDetails, isIconButton, shouldShowArrow = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorEl = useRef(null);
  const [arrowRef, setArrowRef] = useState(null);

  const classes = useStyles();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = event => {
    if (anchorEl.current && anchorEl.current.contains(event.target)) {
      return;
    }

    setIsOpen(false);
  };

  const handleArrowRef = node => {
    setArrowRef(node);
  };

  const dropdownButton = isIconButton ? (
    <IconButton buttonRef={anchorEl} onClick={handleToggle} {...dropdownDetails.buttonProps}>
      {dropdownDetails.buttonChildren}
    </IconButton>
  ) : (
    <Button
      buttonRef={anchorEl}
      onClick={handleToggle}
      variant="text"
      color="inherit"
      {...dropdownDetails.buttonProps}
    >
      {dropdownDetails.buttonChildren}
    </Button>
  );

  return (
    <React.Fragment>
      {dropdownButton}
      <Popper
        className={classes.popper}
        placement="bottom-end"
        open={isOpen}
        anchorEl={anchorEl.current}
        transition
        disablePortal
        modifiers={{
          flip: {
            enabled: true
          },
          arrow: {
            enabled: shouldShowArrow,
            element: arrowRef
          }
        }}
      >
        {({ TransitionProps, placement }) => (
          <React.Fragment>
            {shouldShowArrow && <span ref={handleArrowRef} className={classes.arrow} />}
            <Fade
              timeout={0}
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'top' : 'bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    {dropdownDetails.dropdownItems.map(item => (
                      <MenuItem key={item.key} onClick={item.onClick || handleClose}>
                        {item.children}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Fade>
          </React.Fragment>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default ActionDropdown;
