import { Fab, Modal, Tooltip } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";

import useStyles from "./styles";

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);


  return (
      <>
    <Tooltip title="Add" aria-label="add" onClick={()=> setOpen(true)}>
      <Fab color="secondary" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Tooltip>
    <Modal open={open}>Hello User</Modal>

    </>
  );
};

export default Add;
