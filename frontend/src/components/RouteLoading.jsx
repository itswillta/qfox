import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const RouteLoading = () =>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
    <CircularProgress color="primary" />
  </div>;

export default RouteLoading;
