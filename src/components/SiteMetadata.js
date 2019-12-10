import React from 'react';
import { Helmet } from 'react-helmet';

const SiteMetadata = ({ pageTitle }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{pageTitle}</title>
  </Helmet>
);

export default SiteMetadata;

// <link rel="canonical" href="http://mysite.com/example" />