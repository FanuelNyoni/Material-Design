import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        width: "100%",
        paddingTop: theme.spacing(9),
        backgroundColor: "#00a9bf",
        color: "white"
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
    text: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(3),
            display: "none"
        }
    }
}));

export default useStyles;
