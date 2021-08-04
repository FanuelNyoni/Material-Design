import "./style.css";
import { Button, Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Typography color="primary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut
        illo reprehenderit magnam nam debitis nisi culpa, assumenda
        necessitatibus dicta similique dolorem officiis harum omnis aliquid.
        Similique a accusamus sint.
      </Typography>
      <Button className="btn" color="secondary" variant="contained" fullWidth>
        Press Me
      </Button>
    </div>
  );
}

export default App;
