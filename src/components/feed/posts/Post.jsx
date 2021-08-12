import useStyles from "./styles"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Post = () => {
const classes = useStyles();
    
return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia 
        className={classes.media}
          component="img"
          alt="Reptile"
          image="https://images.pexels.com/photos/1695717/pexels-photo-1695717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    )
}

export default Post
