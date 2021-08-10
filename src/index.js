import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/*
importing overiding overriding themes -->

import { ThemeProvider } from '@material-ui/styles';
import theme from './themes';

<React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
*/
