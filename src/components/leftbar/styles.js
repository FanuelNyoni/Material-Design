import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        paddingTop: theme.spacing(9),
        backgroundColor: "#788587",
        top: 0,
        color: "white",
        [theme.breakpoints.up('sm')]: {
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7"

        }
    },

    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(3),
            cursor: "Pointer"
        }
    },

    icon: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            fontsize: "20px"
        }
    },

    text: {
        fontWeight: "500",
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(3),
            display: "none"
        }
    },


}));

export default useStyles;
