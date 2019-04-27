import React from 'react';
import { Link } from 'react-router-dom';
import withHelmet from '../hocs/withHelmet';

const NotFound = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

export default withHelmet(NotFound, 'Not Found – QFox');
