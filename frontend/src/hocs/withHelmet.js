import React from 'react';
import { Helmet } from 'react-helmet';

const withHelmet = (WrappedPage, pageTitle = 'QFox') => props => (
  <React.Fragment>
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content="QFox – The ultimate learning solution for teachers and students" />
    </Helmet>
    <WrappedPage {...props} />
  </React.Fragment>
);

export default withHelmet;
