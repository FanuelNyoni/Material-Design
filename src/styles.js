import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>({
    button: {
        color: "white",
        background: "black"
    },

    right: {

       [theme.breakpoints.down("sm")]: {
      display: "none",
    },

    }
}));

export default useStyles;
