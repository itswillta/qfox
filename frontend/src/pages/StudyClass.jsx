import React from 'react';

import useStyles from './dashboard/Dashboard.styles';

import logoWithBg from '/images/logo-with-bg.svg';

const StudyClass = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={logoWithBg} alt="logo" width="30%" height="auto" />
    </div>
  );
};

export default StudyClass;
