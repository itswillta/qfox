import React from 'react';

import MainAppBar from './layout/MainAppBar';
import Sidebar from './layout/Sidebar';
import useStyles from './layout/Layout.styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainAppBar />
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
