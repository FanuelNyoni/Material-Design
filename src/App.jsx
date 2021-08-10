import { Grid } from "@material-ui/core";
import Navbar from "./components/navbar/Navbar.jsx";
import useStyles from "./styles.js";

function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm></Grid>
<Grid item sm={2}>
  <Leftbar />
</Grid>
<Grid item sm={7}></Grid>
<Grid item sm={12}></Grid>
      </Grid>
    </div>
  );
}

export default App;
