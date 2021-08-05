import React from 'react';
import ReactDOM from 'react-dom';
//importing overiding
import { ThemeProvider } from '@material-ui/styles';
import theme from './themes';

import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

