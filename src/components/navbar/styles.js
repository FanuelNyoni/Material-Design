import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    /*
        Changing the logo heading size using breakpoints
        for a responsive page on smaller screens    
    */
    logoLg: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block",
        }
    },
    
    logoSm:{
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: "none",
        }
    }
}));

export default useStyles;
