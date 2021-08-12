import { Fab, Tooltip } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

import useStyles from "./styles";

const Add = () => {
  const classes = useStyles();
  return (
    <Tooltip title="Add" aria-label="add">
      <Fab color="secondary" className={classes.absolute}>
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default Add;
