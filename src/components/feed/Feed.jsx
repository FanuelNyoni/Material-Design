import { Container } from "@material-ui/core";
import Post from "./posts/Post";
import useStyles from "./styles";


const Feed = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        </Container>
    )
}

export default Feed
