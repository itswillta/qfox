import React from 'react';

import useStyles from './dashboard/Dashboard.styles';
import MainAppBar from '../components/layout/MainAppBar';

import logoWithBg from '/images/logo-with-bg.svg';

const Main = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MainAppBar />
      <div className={classes.root}>
        <img src={logoWithBg} alt="logo" width="30%" height="auto" />
      </div>
    </React.Fragment>
  );
};

export default Main;
