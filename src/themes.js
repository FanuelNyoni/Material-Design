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
 });

 export default theme;