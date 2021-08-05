/**
 * this is a file used to override material ui 
 * themes
 */

 import { createTheme } from '@material-ui/core/styles';
 import purple from '@material-ui/core/colors/purple';
 import green from '@material-ui/core/colors/green';
import { cyan, yellow } from '@material-ui/core/colors';
 
 const theme = createTheme({
   palette: {
     primary: cyan,
     secondary: green,
   },
   status: {
     danger: 'orange',
   },
   typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
 });

 export default theme;