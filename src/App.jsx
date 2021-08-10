import { Grid } from "@material-ui/core";
import Leftbar from "./components/leftbar/Leftbar.jsx";
import Feed from "./components/feed/Feed.jsx";
import Rightbar from "./components/rightbar/Rightbar.jsx";

import Navbar from "./components/navbar/Navbar.jsx";
import useStyles from "./styles.js";

function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <Leftbar/>
        </Grid>
        <Grid item sm={7}>
          <Feed />
        </Grid>
        <Grid item sm={12}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
