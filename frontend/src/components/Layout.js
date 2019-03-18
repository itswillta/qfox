import React from 'react';

import MainAppBar from './layout/MainAppBar';
import Sidebar from './layout/Sidebar';
import useStyles from './layout/Layout.styles';

const Layout = props => {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      <MainAppBar />
      <Sidebar />
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Layout;
