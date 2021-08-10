import { Container, Typography } from '@material-ui/core'
import { Home } from '@material-ui/icons'
import React from 'react'
import useStyles from './styles';

const Leftbar = () => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.item}>
                <Home className={classes.icon}></Home>
                <Typography className={classes.text}>Home</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}></Home>
                <Typography className={classes.text}>Home</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}></Home>
                <Typography className={classes.text}>Home</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}></Home>
                <Typography className={classes.text}>Home</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}></Home>
                <Typography className={classes.text}>Home</Typography>
            </div>
        </Container>
    )
}

export default Leftbar
