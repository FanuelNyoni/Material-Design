import { makeStyles } from "@material-ui/core";


const styles = makeStyles((themes) => ({
    card: {
        marginBottom: themes.spacing(2),
        [theme.breakpoints.down('sm')]: {
            height: "50px"
        }
    },

    media: {
        height: "200px"
    }
}));

export default styles
