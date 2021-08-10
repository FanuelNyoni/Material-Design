import { Button, Typography } from "@material-ui/core";
import { TouchApp } from "@material-ui/icons";
import Navbar from "./components/Navbar.jsx";
import   useStyles  from "./styles.js";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      
      <Navbar />
      
      <Typography color="primary" variant="h6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut
        illo reprehenderit magnam nam debitis nisi culpa, assumenda
        necessitatibus dicta similique dolorem officiis harum omnis aliquid.
        Similique a accusamus sint.
      </Typography>
      <Button
        variant="contained"
        startIcon={<TouchApp />}
        styles={classes.button}
      >
        Press Me
      </Button>
    </div>
  );
}

export default App;
