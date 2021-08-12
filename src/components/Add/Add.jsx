import useStyles from "./styles"

const Add = () => {
    const classes = useStyles();
    return (
        <Tooltip title="Add" aria-label="add">
  <Fab color="secondary" className={classes.absolute}>
    <Add />
  </Fab>
</Tooltip>
    )
}

export default Add
