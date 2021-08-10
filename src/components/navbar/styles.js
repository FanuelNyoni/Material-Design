import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: "#1b232e",
        position: "absolute"
    },

    /*
          Changing the logo heading size using breakpoints
          for a responsive page on smaller screens    
      */
    logoLg: {
        display: "none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
            display: "block",
        },
    },

    logoSm: {
        display: "block",
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },

    //styling the placement of the nav components
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },

    //styling the search components
    search: {
        display: "flex",
        alignItems: "center",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
        },
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        justifyContent: "center",
    },

    Inputbase: {
        color: "white",
    },

    cancel: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },

    settings: {
        display: (props) => (props.open ? "none" : "flex"),
        alignItems: "center",
    },

    ///badge
    settingsIcon: {
        color: "#b54a4a",
        marginRight: theme.spacing(2),
        cursor: "pointer",
    },

    badge: {
        marginRight: theme.spacing(2),
    },

    setSearchIcon: {
        cursor: "pointer",
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));

export default useStyles;
