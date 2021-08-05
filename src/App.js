import "./style.css";
import { Button, Typography } from "@material-ui/core";
import {TouchApp} from "@material-ui/icons"

function App() {
  return (
    <div className="App">
      <Typography color="primary" variant="h6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut
        illo reprehenderit magnam nam debitis nisi culpa, assumenda
        necessitatibus dicta similique dolorem officiis harum omnis aliquid.
        Similique a accusamus sint.
      </Typography>
      <Button  color="primary" variant="contained" fullWidth startIcon={<TouchApp />}>
        Press Me
      </Button>
    </div>
  );
}

export default App;
