import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => (
  <CssBaseline>
    {element}
  </CssBaseline>
);
